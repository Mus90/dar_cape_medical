import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormNotifications, isValidEmail } from '@/lib/emailService';
import { checkRateLimit, getClientIdentifier } from '@/lib/rateLimiter';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateLimit = checkRateLimit(identifier, {
      windowMs: 60 * 60 * 1000, // 1 hour
      maxRequests: 5, // 5 requests per hour
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, country, specialty, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().slice(0, 2000);
    const sanitizedPhone = phone?.trim().slice(0, 50);
    const sanitizedCountry = country?.trim().slice(0, 100);
    const sanitizedSpecialty = specialty?.trim().slice(0, 100);

    // Send email notifications
    const result = await sendContactFormNotifications({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      country: sanitizedCountry,
      specialty: sanitizedSpecialty,
      message: sanitizedMessage,
    });

    if (!result.success) {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        reference: result.reference 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

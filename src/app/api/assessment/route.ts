import { NextRequest, NextResponse } from 'next/server';
import { sendAssessmentFormNotifications, isValidEmail, generateReference } from '@/lib/emailService';
import { checkRateLimit, getClientIdentifier } from '@/lib/rateLimiter';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateLimit = checkRateLimit(identifier, {
      windowMs: 60 * 60 * 1000, // 1 hour
      maxRequests: 3, // 3 assessment requests per hour (more restrictive)
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    
    // Honeypot check - if filled, it's a bot
    const honeypot = formData.get('website_url');
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }
    
    // Time-based validation - prevent instant submissions (bots)
    const submissionTime = formData.get('submissionTime');
    if (submissionTime) {
      const timeElapsed = parseInt(submissionTime as string);
      if (timeElapsed < 5000) {
        return NextResponse.json(
          { error: 'Please take your time to complete the form accurately' },
          { status: 400 }
        );
      }
    }
    
    // Extract form fields
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const nationality = formData.get('nationality') as string;
    const currentCountry = formData.get('currentCountry') as string;
    const medicalSchool = formData.get('medicalSchool') as string;
    const qualificationCountry = formData.get('qualificationCountry') as string;
    const graduationYear = formData.get('graduationYear') as string;
    const internship = formData.get('internship') as string;
    const currentPosition = formData.get('currentPosition') as string;
    const experience = formData.get('experience') as string;
    const desiredPathway = formData.get('desiredPathway') as string;
    const desiredSpecialty = formData.get('desiredSpecialty') as string;
    const preferredUniversity = formData.get('preferredUniversity') as string;
    const targetYear = formData.get('targetYear') as string;
    const selfFunding = formData.get('selfFunding') as string;
    const cvFile = formData.get('cv') as File | null;

    // Validate required fields
    if (!fullName || !email || !whatsapp || !nationality || !currentCountry || 
        !medicalSchool || !qualificationCountry || !graduationYear || 
        !internship || !desiredPathway || !desiredSpecialty || !selfFunding || !cvFile) {
      return NextResponse.json(
        { error: 'All required fields must be completed including CV' },
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

    // Content validation - detect fake/spam data
    const suspiciousPatterns = [
      /test/i,
      /spam/i,
      /fake/i,
      /xxx/i,
      /example\.com/i,
      /temp/i,
      /dummy/i,
    ];

    const checkField = (value: string) => {
      if (!value) return false;
      return suspiciousPatterns.some(pattern => pattern.test(value));
    };

    if (checkField(fullName) || checkField(email) || checkField(whatsapp) || 
        checkField(medicalSchool) || checkField(nationality)) {
      return NextResponse.json(
        { error: 'Invalid data detected. Please provide accurate information.' },
        { status: 400 }
      );
    }

    // Validate phone number format (basic check)
    const phoneRegex = /^[\d\s\+\-\(\)]{10,20}$/;
    if (!phoneRegex.test(whatsapp.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate graduation year
    const currentYear = new Date().getFullYear();
    const gradYear = parseInt(graduationYear);
    if (isNaN(gradYear) || gradYear < 1950 || gradYear > currentYear + 5) {
      return NextResponse.json(
        { error: 'Invalid graduation year' },
        { status: 400 }
      );
    }

    // Validate target year if provided
    if (targetYear) {
      const targetYr = parseInt(targetYear);
      if (isNaN(targetYr) || targetYr < currentYear || targetYr > currentYear + 5) {
        return NextResponse.json(
          { error: 'Invalid target year' },
          { status: 400 }
        );
      }
    }

    // Validate CV file if provided
    let cvAttachment: { filename: string; content: Buffer; contentType: string } | undefined;
    if (cvFile && cvFile.size > 0) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(cvFile.type)) {
        return NextResponse.json(
          { error: 'CV must be a PDF or Word document' },
          { status: 400 }
        );
      }
      
      // Validate file size (max 5MB)
      if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'CV file size must be less than 5MB' },
          { status: 400 }
        );
      }

      // Convert file to buffer for attachment
      const bytes = await cvFile.arrayBuffer();
      cvAttachment = {
        filename: cvFile.name,
        content: Buffer.from(bytes),
        contentType: cvFile.type,
      };
    }

    // Sanitize inputs
    const sanitizedData = {
      name: fullName.trim().slice(0, 100),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim().slice(0, 50),
      nationality: nationality.trim().slice(0, 100),
      currentCountry: currentCountry.trim().slice(0, 100),
      medicalSchool: medicalSchool.trim().slice(0, 200),
      qualificationCountry: qualificationCountry.trim().slice(0, 100),
      graduationYear: graduationYear.trim(),
      internship: internship.trim(),
      currentPosition: currentPosition?.trim().slice(0, 200),
      experience: experience?.trim(),
      desiredPathway: desiredPathway.trim(),
      desiredSpecialty: desiredSpecialty.trim(),
      preferredUniversity: preferredUniversity?.trim().slice(0, 200),
      targetYear: targetYear?.trim(),
      selfFunding: selfFunding.trim(),
    };

    // Send email notifications with CV attachment
    const result = await sendAssessmentFormNotifications(sanitizedData, cvAttachment);

    if (!result.success) {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Assessment submitted successfully',
        reference: result.reference 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Assessment form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit assessment' },
      { status: 500 }
    );
  }
}

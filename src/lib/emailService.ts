import { Resend } from 'resend';

// Environment variable validation
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'mustafa@darcape.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'mustafa@darcape.com';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://darcape.com';

// Use sandbox domain for testing if production domain not verified
// Remove this after verifying darcape.com in Resend dashboard
const USE_SANDBOX = process.env.RESEND_USE_SANDBOX === 'true';
const SANDBOX_FROM_EMAIL = 'onboarding@resend.dev';
const SANDBOX_TO_EMAIL = process.env.RESEND_SANDBOX_TO_EMAIL || 'mustafaalamin.07@gmail.com';

// Lazy initialization of Resend client
let resendInstance: Resend | null = null;

function getResendClient(): Resend | null {
  if (!RESEND_API_KEY) {
    return null;
  }
  if (!resendInstance) {
    resendInstance = new Resend(RESEND_API_KEY);
  }
  return resendInstance;
}

// Email templates
const emailTemplates = {
  // Administrator notification for contact form
  adminContactNotification: (data: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
    specialty?: string;
    message: string;
    reference?: string;
  }) => ({
    subject: `New Contact Form Submission from ${data.name}${data.reference ? ` [Ref: ${data.reference}]` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-left: 4px solid #14b8a6; border-radius: 4px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          .reference { background: #fef3c7; padding: 10px; border-radius: 4px; margin-bottom: 20px; font-weight: bold; color: #92400e; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Dar Cape Medica Website</p>
        </div>
        <div class="content">
          ${data.reference ? `<div class="reference">Reference: ${data.reference}</div>` : ''}
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">
              <a href="mailto:${data.email}" style="color: #14b8a6;">${data.email}</a>
            </div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          ${data.country ? `
          <div class="field">
            <div class="label">Country:</div>
            <div class="value">${data.country}</div>
          </div>
          ` : ''}
          ${data.specialty ? `
          <div class="field">
            <div class="label">Specialty:</div>
            <div class="value">${data.specialty}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Dar Cape Medica contact form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
          <p><a href="${SITE_URL}">${SITE_URL}</a></p>
        </div>
      </body>
      </html>
    `
  }),

  // Administrator notification for assessment form
  adminAssessmentNotification: (data: {
    name: string;
    email: string;
    whatsapp: string;
    nationality: string;
    currentCountry: string;
    medicalSchool: string;
    qualificationCountry: string;
    graduationYear: string;
    internship: string;
    registration?: string;
    currentPosition?: string;
    experience?: string;
    desiredPathway: string;
    desiredSpecialty: string;
    preferredUniversity?: string;
    targetYear?: string;
    selfFunding: string;
    qualifications?: string;
    reference?: string;
  }) => ({
    subject: `New Assessment Request from ${data.name}${data.reference ? ` [Ref: ${data.reference}]` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 18px; font-weight: bold; color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #14b8a6; padding-bottom: 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; font-size: 14px; }
          .value { background: white; padding: 10px; border-left: 4px solid #14b8a6; border-radius: 4px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          .reference { background: #fef3c7; padding: 10px; border-radius: 4px; margin-bottom: 20px; font-weight: bold; color: #92400e; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Assessment Request</h1>
          <p>Dar Cape Medica Website</p>
        </div>
        <div class="content">
          ${data.reference ? `<div class="reference">Reference: ${data.reference}</div>` : ''}
          
          <div class="section">
            <div class="section-title">Personal Information</div>
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">
                <a href="mailto:${data.email}" style="color: #14b8a6;">${data.email}</a>
              </div>
            </div>
            <div class="field">
              <div class="label">WhatsApp:</div>
              <div class="value">${data.whatsapp}</div>
            </div>
            <div class="field">
              <div class="label">Nationality:</div>
              <div class="value">${data.nationality}</div>
            </div>
            <div class="field">
              <div class="label">Current Country:</div>
              <div class="value">${data.currentCountry}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Medical Background</div>
            <div class="field">
              <div class="label">Medical School:</div>
              <div class="value">${data.medicalSchool}</div>
            </div>
            <div class="field">
              <div class="label">Qualification Country:</div>
              <div class="value">${data.qualificationCountry}</div>
            </div>
            <div class="field">
              <div class="label">Graduation Year:</div>
              <div class="value">${data.graduationYear}</div>
            </div>
            <div class="field">
              <div class="label">Internship Completed:</div>
              <div class="value">${data.internship}</div>
            </div>
            ${data.registration ? `
            <div class="field">
              <div class="label">Current Registration:</div>
              <div class="value">${data.registration}</div>
            </div>
            ` : ''}
            ${data.currentPosition ? `
            <div class="field">
              <div class="label">Current Position:</div>
              <div class="value">${data.currentPosition}</div>
            </div>
            ` : ''}
            ${data.experience ? `
            <div class="field">
              <div class="label">Years of Experience:</div>
              <div class="value">${data.experience}</div>
            </div>
            ` : ''}
          </div>

          <div class="section">
            <div class="section-title">Pathway Goals</div>
            <div class="field">
              <div class="label">Desired Pathway:</div>
              <div class="value">${data.desiredPathway}</div>
            </div>
            <div class="field">
              <div class="label">Desired Specialty:</div>
              <div class="value">${data.desiredSpecialty}</div>
            </div>
            ${data.preferredUniversity ? `
            <div class="field">
              <div class="label">Preferred University:</div>
              <div class="value">${data.preferredUniversity}</div>
            </div>
            ` : ''}
            ${data.targetYear ? `
            <div class="field">
              <div class="label">Target Year:</div>
              <div class="value">${data.targetYear}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Self-Funding:</div>
              <div class="value">${data.selfFunding}</div>
            </div>
            ${data.qualifications ? `
            <div class="field">
              <div class="label">Additional Qualifications:</div>
              <div class="value">${data.qualifications.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Dar Cape Medica assessment form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
          <p><a href="${SITE_URL}">${SITE_URL}</a></p>
        </div>
      </body>
      </html>
    `
  }),

  // Confirmation email for contact form
  contactConfirmation: (data: { name: string; reference?: string }) => ({
    subject: 'Thank you for contacting Dar Cape Medica',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          .reference { background: #fef3c7; padding: 10px; border-radius: 4px; margin-bottom: 20px; font-weight: bold; color: #92400e; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Thank You</h1>
          <p>Dar Cape Medica</p>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          <p>Thank you for contacting Dar Cape Medica. We have received your message and will review it shortly.</p>
          ${data.reference ? `<p class="reference">Your reference number: ${data.reference}</p>` : ''}
          <p>We aim to respond to all enquiries within 2-3 business days. If your matter is urgent, please contact us via WhatsApp at +27749548756.</p>
          <p>Best regards,<br>Dar Cape Medica Team</p>
        </div>
        <div class="footer">
          <p><a href="${SITE_URL}">${SITE_URL}</a></p>
          <p>Email: mustafa@darcape.com | WhatsApp: +27749548756</p>
        </div>
      </body>
      </html>
    `
  }),

  // Confirmation email for assessment form
  assessmentConfirmation: (data: { name: string; reference: string }) => ({
    subject: 'Assessment Request Received - Dar Cape Medica',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          .reference { background: #fef3c7; padding: 15px; border-radius: 4px; margin-bottom: 20px; font-weight: bold; color: #92400e; font-size: 16px; }
          .info-box { background: #e0f2fe; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #0284c7; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Assessment Request Received</h1>
          <p>Dar Cape Medica</p>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          <p>Thank you for submitting your assessment request to Dar Cape Medica. We have received your information and will review it carefully.</p>
          <div class="reference">Your Reference Number: ${data.reference}</div>
          <div class="info-box">
            <p><strong>Important Information:</strong></p>
            <ul>
              <li>Please keep this reference number for your records</li>
              <li>We will contact you within 3-5 business days with your assessment results</li>
              <li>Have your CV and supporting documents ready for review</li>
            </ul>
          </div>
          <p>If you have any questions or need to provide additional information, please contact us:</p>
          <p>Email: mustafa@darcape.com<br>WhatsApp: +27749548756</p>
          <p>Best regards,<br>Dar Cape Medica Team</p>
        </div>
        <div class="footer">
          <p><a href="${SITE_URL}">${SITE_URL}</a></p>
          <p>Email: mustafa@darcape.com | WhatsApp: +27749548756</p>
        </div>
      </body>
      </html>
    `
  })
};

// Generate unique reference number
export function generateReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `DCM-${timestamp}-${random}`;
}

// Validate email address
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Send email with error handling
export async function sendEmail(
  to: string | string[],
  subject: string,
  html: string,
  replyTo?: string,
  attachment?: { filename: string; content: Buffer; contentType: string }
): Promise<{ success: boolean; error?: string }> {
  const resend = getResendClient();
  
  if (!resend) {
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }

  // In sandbox mode, redirect all emails to the account owner
  const actualTo = USE_SANDBOX ? SANDBOX_TO_EMAIL : to;

  try {
    const emailOptions: any = {
      from: `Dar Cape Medica <${USE_SANDBOX ? SANDBOX_FROM_EMAIL : FROM_EMAIL}>`,
      to: Array.isArray(actualTo) ? actualTo : [actualTo],
      subject,
      html,
      replyTo: replyTo || undefined,
    };

    // Add attachment if provided (only works with verified domain, not sandbox)
    if (attachment && !USE_SANDBOX) {
      emailOptions.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content.toString('base64'),
          type: attachment.contentType,
          disposition: 'attachment',
        },
      ];
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

// Send contact form notifications
export async function sendContactFormNotifications(data: {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  specialty?: string;
  message: string;
}): Promise<{ success: boolean; reference?: string; error?: string }> {
  const reference = generateReference();

  // Send to administrator
  const adminEmail = emailTemplates.adminContactNotification({ ...data, reference });
  const adminResult = await sendEmail(
    ADMIN_EMAIL,
    adminEmail.subject,
    adminEmail.html,
    data.email
  );

  if (!adminResult.success) {
    return { success: false, error: adminResult.error };
  }

  // Send confirmation to visitor
  const confirmationEmail = emailTemplates.contactConfirmation({ name: data.name, reference });
  await sendEmail(data.email, confirmationEmail.subject, confirmationEmail.html);

  return { success: true, reference };
}

// Send assessment form notifications
export async function sendAssessmentFormNotifications(
  data: {
    name: string;
    email: string;
    whatsapp: string;
    nationality: string;
    currentCountry: string;
    medicalSchool: string;
    qualificationCountry: string;
    graduationYear: string;
    internship: string;
    registration?: string;
    currentPosition?: string;
    experience?: string;
    desiredPathway: string;
    desiredSpecialty: string;
    preferredUniversity?: string;
    targetYear?: string;
    selfFunding: string;
    qualifications?: string;
  },
  cvAttachment?: { filename: string; content: Buffer; contentType: string }
): Promise<{ success: boolean; reference?: string; error?: string }> {
  const reference = generateReference();

  // Send to administrator with CV attachment
  const adminEmail = emailTemplates.adminAssessmentNotification({ ...data, reference });
  const adminResult = await sendEmail(
    ADMIN_EMAIL,
    adminEmail.subject,
    adminEmail.html,
    data.email,
    cvAttachment
  );

  if (!adminResult.success) {
    return { success: false, error: adminResult.error };
  }

  // Send confirmation to candidate (without CV attachment)
  const confirmationEmail = emailTemplates.assessmentConfirmation({ name: data.name, reference });
  await sendEmail(data.email, confirmationEmail.subject, confirmationEmail.html);

  return { success: true, reference };
}

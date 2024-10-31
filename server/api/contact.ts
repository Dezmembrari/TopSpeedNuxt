// server/api/contact.ts
import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { nume, prenume, email, numar_de_telefon_optional, mesaj, honeypot, recaptchaToken } = await readBody(event);

  // Honeypot check
  if (honeypot) {
    console.warn('Spam detected via honeypot field');
    return { statusCode: 400, body: { error: 'Spam detected' } };
  }

  // Validate required fields
  if (!nume || !prenume || !email || !mesaj) {
    return { statusCode: 400, body: { error: 'Please fill in all required fields.' } };
  }

  // Email domain blacklist check
  const blacklistedDomains = ['spam.com', 'malicious.com']; // Replace with your blacklist
  const emailDomain = email.split('@')[1].toLowerCase();
  if (blacklistedDomains.includes(emailDomain)) {
    console.warn('Spam detected via email domain blacklist');
    return { statusCode: 400, body: { error: 'Spam detected' } };
  }

  // Keyword filtering
  const spamKeywords = ['spam', 'malicious']; // Replace with your keywords
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  const containsSpamKeyword = spamKeywords.some((keyword) => messageContent.includes(keyword));

  if (containsSpamKeyword) {
    console.warn('Spam detected via keyword filtering');
    return { statusCode: 400, body: { error: 'Spam detected' } };
  }

  // Define a type for the reCAPTCHA response
  interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string; // timestamp of the challenge
  hostname?: string; // hostname of the site where the reCAPTCHA was solved
  'error-codes'?: string[]; // array of error codes
}

try {
  const recaptchaResponse = await $fetch<RecaptchaResponse>('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    },
  });

  if (!recaptchaResponse.success) {
    return {
      statusCode: 400,
      body: {
        error: 'reCAPTCHA verification failed',
        details: recaptchaResponse['error-codes'],
      },
    };
  }
} catch (err) {
  console.error('reCAPTCHA verification error:', err);
  return {
    statusCode: 500,
    body: { error: 'Internal server error during reCAPTCHA verification' },
  };
}

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send the email
  try {
    const mailOptions = {
      from: `"${nume} ${prenume}" <${email}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from ${nume} ${prenume}. Message: ${mesaj}`,
      html: `<p><strong>Message:</strong> ${mesaj}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.info('Message sent successfully.');
    return { statusCode: 200, body: { message: 'Email sent successfully!' } };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: { error: `Error sending email: ${error.message}` } };
  }
});

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Payload = { name?: string; email?: string; company?: string; message?: string } | null;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Payload;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
  }

  // Destination email per user request
  const toAddress = process.env.CONTACT_TO_EMAIL ?? 'info@backpackwander.com';

  // Compose email
  const subject = `Website inquiry from ${payload.name}`;
  const textBody = `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company ?? ''}\n\nMessage:\n${payload.message}`;
  const htmlBody = `<h2>New inquiry from website</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company ?? ''}</p>
    <h3>Message</h3>
    <p>${payload.message.replace(/\n/g, '<br/>')}</p>`;

  // Attempt to send email if SMTP is configured
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM ?? `no-reply@${process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'backpackwander.com'}`;

  if (smtpHost && smtpPort) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined
      });

      await transporter.sendMail({
        from: fromAddress,
        to: toAddress,
        subject,
        text: textBody,
        html: htmlBody
      });

      return NextResponse.json({ message: 'Inquiry received and emailed.' });
    } catch (err) {
      // Log error server-side
      console.error('Error sending contact email:', err);
      return NextResponse.json({ message: 'Inquiry received, but failed to send email.' }, { status: 500 });
    }
  }

  // If no SMTP configured, still acknowledge receipt (useful for local dev)
  return NextResponse.json({ message: 'Inquiry received (no SMTP configured).', data: payload });
}

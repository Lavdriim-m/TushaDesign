import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, projectType, budget, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'TushaDesign Contact <contact@tushadesign.com>',
    to: 'info@tushadesign.com',
    replyTo: email,
    subject: `New Enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
        <h2 style="border-bottom:2px solid #C9A96E;padding-bottom:8px;color:#C9A96E">New Kitchen Enquiry</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#999;width:140px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#999">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#999">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
          ${projectType ? `<tr><td style="padding:8px 0;color:#999">Project Type</td><td style="padding:8px 0">${projectType}</td></tr>` : ''}
          ${budget ? `<tr><td style="padding:8px 0;color:#999">Budget</td><td style="padding:8px 0">${budget}</td></tr>` : ''}
        </table>
        <h3 style="color:#C9A96E;margin-top:24px">Message</h3>
        <p style="white-space:pre-wrap;background:#faf8f5;padding:16px;border-left:3px solid #C9A96E">${message}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

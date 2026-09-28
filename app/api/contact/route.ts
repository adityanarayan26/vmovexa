import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, workEmail, companyName, interest, message } = data;

    if (!firstName || !lastName || !workEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const cleanLastName = lastName === '-' ? '' : lastName;
    const fullName = `${firstName} ${cleanLastName}`.trim();
    const subject = `New Contact Form Submission: ${interest}`;
    const formattedInterest = interest || "General Inquiry";
    const senderEmail = process.env.SMTP_USER;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || senderEmail;

    // Create a transporter using the SMTP credentials from the environment
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Admin Notification Email (to VMOVEXA team)
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 32px 28px; text-align: left; border-bottom: 3px solid #3b82f6; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 28px; }
            .badge { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
            .detail-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .detail-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
            .detail-table td.label { width: 140px; color: #64748b; font-weight: 500; }
            .detail-table td.value { color: #0f172a; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 10px; }
            .message-box h3 { margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
            .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <img src="cid:vmovexa-logo" alt="VMOVEXA" style="height: 24px; display: block;" />
                    <p>New Project Lead from Website Contact Form</p>
                  </td>
                  <td align="right" valign="top">
                    <img src="cid:vmovexa-icon" alt="V" style="height: 48px; display: block;" />
                  </td>
                </tr>
              </table>
            </div>
            <div class="content">
              <span class="badge">New Inquiry</span>
              <table class="detail-table">
                <tr>
                  <td class="label">Client Name:</td>
                  <td class="value">${fullName}</td>
                </tr>
                <tr>
                  <td class="label">Company:</td>
                  <td class="value">${companyName || "Not specified"}</td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td class="value"><a href="mailto:${workEmail}" style="color: #3b82f6; text-decoration: none;">${workEmail}</a></td>
                </tr>
                <tr>
                  <td class="label">Area of Interest:</td>
                  <td class="value">${formattedInterest}</td>
                </tr>
              </table>

              <div class="message-box">
                <h3>Project Details & Requirements</h3>
                <p>${message || 'No message provided'}</p>
              </div>
            </div>
            <div class="footer">
              Submitted via vmovexa.com • Reply directly to this email to contact ${firstName}.
            </div>
          </div>
        </body>
      </html>
    `;

    const logoPath = process.cwd() + '/public/logos/vmovexa-wordmark-dark.png';
    const iconPath = process.cwd() + '/public/logos/vmovexa-icon-dark.png';
    
    const attachments = [
      {
        filename: 'vmovexa-wordmark-dark.png',
        path: logoPath,
        cid: 'vmovexa-logo'
      },
      {
        filename: 'vmovexa-icon-dark.png',
        path: iconPath,
        cid: 'vmovexa-icon'
      }
    ];

    // Send the email to Admin
    await transporter.sendMail({
      from: `"VMOVEXA Website Lead" <${senderEmail}>`,
      replyTo: `"${fullName}" <${workEmail}>`,
      to: recipientEmail,
      subject,
      text: `Name: ${fullName}\nCompany: ${companyName || "N/A"}\nEmail: ${workEmail}\nInterest: ${formattedInterest}\n\nMessage:\n${message || "N/A"}`,
      html: adminHtml,
      attachments: attachments
    });

    // 2. Send Confirmation / Auto-Reply to the Client
    try {
      const clientHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
              .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
              .header { background: #0b1120; padding: 28px; text-align: left; }
              .header img { display: block; }
              .content { padding: 32px 28px; line-height: 1.65; }
              .content h2 { margin: 0 0 12px; font-size: 18px; color: #0f172a; font-weight: 600; }
              .content p { margin: 0 0 16px; font-size: 14px; color: #475569; }
              .summary-box { background: #f1f5f9; border-radius: 10px; padding: 18px; margin: 20px 0; font-size: 13px; color: #334155; }
              .footer { padding: 24px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="left" valign="middle">
                      <img src="cid:vmovexa-logo" alt="VMOVEXA" style="height: 26px; display: block;" />
                    </td>
                    <td align="right" valign="middle">
                      <img src="cid:vmovexa-icon" alt="V" style="height: 48px; display: block;" />
                    </td>
                  </tr>
                </table>
              </div>
              <div class="content">
                <h2>Thank you for reaching out, ${firstName}!</h2>
                <p>We've received your project inquiry regarding <strong>${formattedInterest}</strong>. Our team is reviewing your requirements and will get back to you shortly.</p>
                <div class="summary-box">
                  <strong>Summary of your enquiry:</strong><br/>
                  ${companyName ? `• Company: ${companyName}<br/>` : ""}
                  • Area of Interest: ${formattedInterest}<br/>
                  ${message ? `• Message: "${message.slice(0, 160)}${message.length > 160 ? "..." : ""}"` : ""}
                </div>
                <p>If you have any urgent details to share, feel free to reply directly to this email or reach us at <a href="mailto:hello@vmovexa.com" style="color: #3b82f6;">hello@vmovexa.com</a>.</p>
              </div>
              <div class="footer">
                VMOVEXA • hello@vmovexa.com
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"VMOVEXA" <${senderEmail}>`,
        to: workEmail,
        subject: 'Thank you for contacting VMOVEXA',
        html: clientHtml,
        attachments: attachments
      });
    } catch (clientMailError) {
      // Non-critical error: lead is already sent to admin
      console.warn("Client auto-reply failed to send:", clientMailError);
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

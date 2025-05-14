import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure your email transporter (using environment variables)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your email service (e.g., 'SendGrid', 'Mailgun')
    auth: {
      user: process.env.EMAIL_USER, // Your email address from Vercel Environment Variables
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password from Vercel Environment Variables
    },
  });

  try {
    // Compose and send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your email address
      to: process.env.RECIPIENT_EMAIL, // The email address you want to receive messages (from Vercel Environment Variables)
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

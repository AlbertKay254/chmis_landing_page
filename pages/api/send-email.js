// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Outlook', // e.g., 'Gmail'
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'itinterns@chak.or.ke', // your email address
        pass: 'Hmis2024', // your email password
      },
    });

    // Construct the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'itinterns@chak.or.ke', // recipient email address
      subject: 'CHMIS Demo Password Request',
      text: `User with email ${email} signed up.`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { FirstName, lastName, Email, Facility } = req.body;


  // Create a transporter object using SMTP transport(mail config)
  const transporter = nodemailer.createTransport({
    service: 'Outlook', // e.g., 'Gmail'
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'itinterns@chak.or.ke', 
      pass: '********', 
    },
  });


    const mailOptions = {
      from: 'itinterns@chak.or.ke', 
      to: 'itinterns@chak.or.ke', 
      subject: 'New User Signed Up',
      text: `A new user has signed up:
      First Name: ${FirstName}
      Last Name: ${lastName}
      Email: ${Email}
      Facility: ${Facility}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

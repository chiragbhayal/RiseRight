// server/utils/sendMail.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use your provider like 'hotmail', 'yahoo', or a custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"RiseRight 🚀" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`📩 Email sent: ${info.response}`);
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error;
  }
};

export default sendMail;

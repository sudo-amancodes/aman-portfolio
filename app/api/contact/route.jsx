// /app/api/contact/route.js or /pages/api/contact.js

import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const body = await req.json();

    const { firstname, lastname, email, phone, service, message } = body;

    // Configure your SMTP transport (Gmail, SMTP service, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any other SMTP service like Outlook, etc.
      auth: {
        user: process.env.SMTP_USER, // your email address
        pass: process.env.SMTP_PASS, // your email password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL, // Your email address to receive the email
      subject: `New contact from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email" }),
      {
        status: 500,
      }
    );
  }
}

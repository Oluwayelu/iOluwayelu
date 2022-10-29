import nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, title, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "oluwayeluifeoluwa@gmail.com",
      subject: `iOluwayelu: ${name} sent a message`,
      html: `<h3>${title}</h3>
        <p><strong>Message: </strong> ${message}</p>
        <h4>Contact ${name} by,</h4>
        <p>Email: ${email}</p>
      `,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

export default sendMail;

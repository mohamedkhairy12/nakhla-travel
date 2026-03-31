import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message?: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Method Not Allowed", success: false });
  }

  const {
    name,
    email,
    phone,
    travelDates,
    travelers,
    stayLength,
    experiences,
    travelStyle,
  } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "Missing required fields", success: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "sales@nakhlatravel.com",
        pass: process.env.SMTP_PASS || "jqcvlcdpkzmxsybg",
      },
    });

    const experiencesText =
      Array.isArray(experiences) && experiences.length > 0
        ? experiences.join(", ")
        : "None selected";

    const travelStyleText =
      Array.isArray(travelStyle) && travelStyle.length > 0
        ? travelStyle.join(", ")
        : "None selected";

    const mailOptions = {
      from: email,
      to: "sales@nakhlatravel.com",
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text: `Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Number of Travelers: ${travelers || "Not provided"}
        Preferred Travel Dates: ${travelDates || "Not provided"}
        Length of Stay: ${stayLength || "Not provided"}
        Experiences: ${experiencesText}
        Travel Style: ${travelStyleText}`,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error sending email" });
  }
}

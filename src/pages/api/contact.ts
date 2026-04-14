import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

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
    nationality,
    email,
    phone,
    travelDates,
    travelers,
    stayLength,
    experiences,
    travelStyle,
    specialText
  } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "Missing required fields", success: false });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const experiencesText =
      Array.isArray(experiences) && experiences.length > 0
        ? experiences.join(", ")
        : "None selected";

    const travelStyleText =
      Array.isArray(travelStyle) && travelStyle.length > 0
        ? travelStyle.join(", ")
        : "None selected";

    await resend.emails.send({
      from: "Nakhla Travel <noreply@nakhlatravel.com>",
      to: "sales@nakhlatravel.com",
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text: `Name: ${name}
Nationality: ${nationality || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Number of Travelers: ${travelers || "Not provided"}
Preferred Travel Dates: ${travelDates || "Not provided"}
Length of Stay: ${stayLength || "Not provided"}
Experiences: ${experiencesText}
Travel Style: ${travelStyleText}
Special Requests: ${specialText || "Not provided"}`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error?.message || error);
    return res
      .status(500)
      .json({ success: false, message: `Error sending email: ${error?.message || "Unknown error"}` });
  }
}

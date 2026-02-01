"use server";

import { Resend } from "resend";
import { ContactNotification } from "@/components/emails/ContactNotification";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "En-Ka Website <rafet@en-ka.net>",
      to: [process.env.CONTACT_RECEIVER_EMAIL || "bilgi@en-ka.net"],
      subject: `New Contact Form Submission: ${formData.name}`,
      react: ContactNotification({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected Error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}

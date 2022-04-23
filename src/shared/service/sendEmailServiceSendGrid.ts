import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
dotenv.config();

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export const sendEmailServiceSendGrid = async (
  recipient: string,
  subject: string,
  message: string
): Promise<unknown> => {
  const msg = {
    to: `${recipient}`,
    from: `${process.env.VALID_EMAIL}`,
    subject: `${subject}`,
    text: "Hello to myself",
    html: message,
  };

  try {
    return await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

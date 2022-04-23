import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

/* console.log(process.env.EMAIL_HOST);
const transporter = nodemailer.createTransport({
  host: `${process.env.EMAIL_HOST}`,
  port: parseInt(`${process.env.EMAIL_PORT}`),
  auth: {
    user: `${process.env.SENDER_EMAIL}`,
    pass: `${process.env.SENDER_PASSWORD}`,
  },
  secure: true,
  tls: {
    ciphers: "SSLv3",
  },
}); */

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  tls: {
     ciphers: 'SSLv3',
   },
  auth: {
    user: `${process.env.SENDER_EMAIL}`,
    pass: `${process.env.SENDER_PASSWORD}`,
  },
  secure: true,
});
//Message object

export const sendEmailServiceNodeMailer = (
  recipient: string,
  subject: string,
  link?: string
) => {
  let message = {
    from: `Sender Name <${process.env.SENDER_EMAIL}>`,
    to: `Recipient <${recipient}>`,
    subject: `${subject}`,
    text: "Hello to myself!",
    html: `<p><b>Hello</b> to myself!</p> ${link ? "<a>" + link + "</a>" : ""}`,
  };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error ocurred. " + err.message);
        return process.exit(1);
      }
      console.log("message sent : %s", info.messageId);
      console.log("Previuw URL: %s", nodemailer.getTestMessageUrl(info))
    });
};

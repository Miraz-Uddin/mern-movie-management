import nodemailer from "nodemailer";

export default async function SendEmailUtility(to, text, subject) {
  const {
    MAIL_HOST: host,
    MAIL_PORT: port,
    MAIL_SECURE: secure,
    MAIL_USER: user,
    MAIL_PASS: pass,
    MAIL_TLS: rejectUnauthorized,
  } = process.env;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: secure === "true" ? true : false,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: rejectUnauthorized === "false" ? false : true,
    },
  });

  const messageTemplate = {
    from: `Movie Manager<${user}>`,
    to,
    subject,
    text,
  };

  return await transporter.sendMail(messageTemplate);
}

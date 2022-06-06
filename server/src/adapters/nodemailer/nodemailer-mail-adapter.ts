import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8279312ed8db9e",
    pass: "3a29c12ea4fc6a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <email@feedget.com>',
      to: 'Fulano <jhornet@outlook.com>',
      subject,
      html: body,
    })
  }
}
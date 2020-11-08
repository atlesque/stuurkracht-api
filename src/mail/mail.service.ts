import { Injectable } from "@nestjs/common";
import { MessageModel } from "src/database/models/message.model";
import * as mailjetService from "node-mailjet";

@Injectable()
export class MailService {
  sendMessage(newMessage: MessageModel) {
    // TODO: Recaptcha verification and Mailjet template
    const mailjet = mailjetService.connect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "info@stuurkracht.be",
            Name: "Stuurkracht",
          },
          To: [
            {
              Email: newMessage.recipientEmail,
              Name: newMessage.recipientName,
            },
          ],
          Subject: `${newMessage.senderName} stuurt je kracht`,
          TextPart: `Je ontving een kaart van ${newMessage.senderName}. Je kan deze hier bekijken: https://stuurkracht.be/boodschap/${newMessage.id}`,
          HTMLPart: `
          <h1>Je ontving een kaart van ${newMessage.senderName}.</h1>
          <p>Je kan deze hier bekijken:
            <a href="https://stuurkracht.be/boodschap/${newMessage.id}">https://stuurkracht.be/boodschap/${newMessage.id}</a>
          </p>
          `,
        },
      ],
    });
  }
}

import { Injectable } from "@nestjs/common";
import { MessageModel } from "src/database/models/message.model";
import * as mailjetService from "node-mailjet";

@Injectable()
export class MailService {
  sendMessage(newMessage: MessageModel) {
    const mailjet = mailjetService.connect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );
    return mailjet.post("send", { version: "v3.1" }).request({
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
          TemplateID: parseInt(process.env.MJ_RECEIVED_CARD_TEMPLATE_ID),
          TemplateLanguage: true,
          Variables: {
            senderName: newMessage.senderName,
            cardUrl: `https://stuurkracht.be/boodschap/${newMessage.id}`,
          },
        },
      ],
    });
  }
}

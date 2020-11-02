import { Inject, Injectable } from "@nestjs/common";
import { MessageModel } from "../database/models/message.model";
import { ModelClass, transaction } from "objection";
import { CardsService } from "../cards/cards.service";

@Injectable()
export class MessagesService {
  constructor(
    private cardService: CardsService,
    @Inject("MessageModel") private modelClass: ModelClass<MessageModel>
  ) {}

  /* findAll() {
    return this.modelClass.query();
  } */

  /* findOne(id: number) {
    return this.modelClass.query().findById(id);
  } */

  async create(props: Partial<MessageModel>) {
    // TODO
    const mailjet = require("node-mailjet").connect(
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
              Email: props.recipientEmail,
              Name: props.recipientName,
            },
          ],
          Subject: `${props.senderName} stuurt je kracht`,
          TextPart: `Je ontving een kaart van ${props.senderName}. Je kan deze hier bekijken: https://stuurkracht.be/boodschap/123`,
          HTMLPart: `
          <h1>Je ontving een kaart van ${props.senderName}.</h1>
          <p>Je kan deze hier bekijken:
            <a href="https://stuurkracht.be/boodschap/123">https://stuurkracht.be/boodschap/123</a>
          </p>
          `,
        },
      ],
    });
    try {
      const response = await request;
      console.log(response.body);
      return this.modelClass.query().insert(props).returning("*");
    } catch (err) {
      throw new Error(`Error sending message: ${err}`);
    }
  }

  /* update(id: number, props: Partial<MessageModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning("*")
      .first();
  } */

  /* delete(id: number) {
    return transaction(this.modelClass, async (_, trx) => {
      await this.cardService.unsetTheme(id).transacting(trx);

      return this.modelClass
        .query()
        .delete()
        .where({ id })
        .returning("*")
        .first()
        .transacting(trx);
    });
  } */
}

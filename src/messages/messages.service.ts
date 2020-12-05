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

  findAll(page: number = 0, pageSize: number = 10) {
    // NOTE: This can also be written with a subquery
    return this.modelClass
      .query()
      .withGraphFetched("card(selectPicture)")
      .modifiers({
        selectPicture: (builder) => {
          builder.select("picture");
        },
      })
      .orderBy("dateCreated", "desc")
      .page(page, pageSize);
  }

  findOne(id: string) {
    return this.modelClass
      .query()
      .select("id", "senderName", "body")
      .findById(id)
      .withGraphFetched("card");
  }

  async create(props: MessageModel) {
    return this.modelClass.query().insert(props).returning("*");
  }

  async getStatistics() {
    // Use raw knex object to avoid parsing as a MessageModel
    const knex = this.modelClass.knex();
    const totalSentMessages = await knex("messages")
      .count("id")
      .first()
      .then((data) => Number(data.count));
    /*
      SELECT COUNT(*) as totalSent, messages.card_id AS id, cards.name, cards.picture
      FROM messages
      JOIN cards ON messages.card_id = cards.id
      GROUP BY messages.card_id, cards.name, cards.picture
      ORDER BY totalSent DESC
    */
    const mostPopularCards = await this.modelClass
      .query()
      .count("messages.id", { as: "totalSent" })
      .select("messages.card_id AS id", "cards.name", "cards.picture")
      .from("messages")
      .join("cards", "messages.card_id", "=", "cards.id")
      .groupBy("messages.card_id", "cards.name", "cards.picture")
      .orderBy("totalSent", "desc")
      .limit(3);
    /* 
      SELECT COUNT(messages.sender_email) AS totalSent, messages.sender_email AS email
      FROM messages
      GROUP BY email
      ORDER BY totalSent DESC
      LIMIT 3
    */
    const mostActiveSenders = await this.modelClass
      .query()
      .count("sender_email", { as: "totalSent" })
      .select("messages.sender_email AS email")
      .groupBy("email")
      .orderBy("totalSent", "desc")
      .limit(3);
    return {
      totalSentMessages,
      mostPopularCards,
      mostActiveSenders,
    };
  }

  /* update(id: number, props: MessageModel) {
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

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

  findAll() {
    // return this.modelClass.query();
    return this.modelClass
      .query()
      .withGraphFetched("card(selectPicture)")
      .modifiers({
        selectPicture: (builder) => {
          builder.select("picture");
        },
      })
      .orderBy("dateCreated", "desc");
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

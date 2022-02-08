import { Model } from "objection";
import { BaseUuidModel } from "./base-uuid.model";
import { CardModel } from "./card.model";

export class MessageModel extends BaseUuidModel {
  static tableName = "messages";

  cardId!: number;
  senderName!: string;
  senderEmail!: string;
  recipientName!: string;

  recipientEmail?: string;
  body?: string;

  static get relationMappings() {
    return {
      card: {
        relation: Model.BelongsToOneRelation,
        modelClass: CardModel,
        join: {
          from: "messages.cardId",
          to: "cards.id",
        },
      },
    };
  }
}

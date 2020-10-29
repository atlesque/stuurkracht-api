import { BaseModel } from "./base.model";

export class MessageCardModel extends BaseModel {
  static tableName = "message_card";

  messageId: number;
  cardId: number;
}

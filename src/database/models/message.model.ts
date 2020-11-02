import { BaseModel } from "./base.model";

export class MessageModel extends BaseModel {
  static tableName = "messages";

  cardId!: number;
  senderName!: string;
  senderEmail!: string;
  recipientName!: string;
  recipientEmail!: string;

  body?: string;
}

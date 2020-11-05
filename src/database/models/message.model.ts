import { BaseUuidModel } from "./base-uuid.model";

export class MessageModel extends BaseUuidModel {
  static tableName = "messages";

  cardId!: number;
  senderName!: string;
  senderEmail!: string;
  recipientName!: string;
  recipientEmail!: string;

  body?: string;
}

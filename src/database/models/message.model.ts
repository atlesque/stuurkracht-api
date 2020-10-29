import { BaseModel } from "./base.model";

export class MessageModel extends BaseModel {
  static tableName = "messages";

  senderName!: string;
  senderEmail!: string;
  recipientName!: string;
  recipientEmail!: string;

  body?: string;
}

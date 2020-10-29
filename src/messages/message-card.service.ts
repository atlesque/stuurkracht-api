import { Injectable } from "@nestjs/common";
import { MessageCardModel } from "../database/models/message-card.model";

@Injectable()
export class MessageCardService {
  constructor() {
    return null;
  }

  create(props: Partial<MessageCardModel>) {
    return null;
  }

  async delete(props: Partial<MessageCardModel>) {
    return null;
  }

  deleteByNoteId(noteId: number) {
    return null;
  }

  deleteByTagId(tagId: number) {
    return null;
  }
}

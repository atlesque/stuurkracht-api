import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { MessagesModule } from "./messages/messages.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [CardsModule, MessagesModule, DatabaseModule],
})
export class ApplicationModule {}

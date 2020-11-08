import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { MessagesModule } from "./messages/messages.module";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    CardsModule,
    MessagesModule,
    UsersModule,
    DatabaseModule,
    AuthModule,
    MailModule,
  ],
})
export class ApplicationModule {}

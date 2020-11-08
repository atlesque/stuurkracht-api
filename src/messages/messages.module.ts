import { Global, Module } from "@nestjs/common";
import { MailService } from "../mail/mail.service";
import { MessagesController } from "./messages.controller";
import { MessagesService } from "./messages.service";

@Global()
@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [MailService],
  exports: [MessagesService],
})
export class MessagesModule {}

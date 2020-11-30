import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { MessagesModule } from "./messages/messages.module";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from './mail/mail.module';
import { S3FileUploadService } from './s3-file-upload/s3-file-upload.service';

@Module({
  imports: [
    CardsModule,
    MessagesModule,
    UsersModule,
    DatabaseModule,
    AuthModule,
    MailModule,
  ],
  providers: [S3FileUploadService],
})
export class ApplicationModule {}

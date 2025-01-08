import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailerProvider } from './providers/mail/nodemailer/mailer.service';
import { MailerController } from './providers/mail/nodemailer/mailer.controller';
import { MailModule } from './providers/mail/nodemailer/mailer.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailModule,
  ],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}

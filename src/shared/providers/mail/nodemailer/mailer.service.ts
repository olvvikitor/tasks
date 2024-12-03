import { MailerService } from '@nestjs-modules/mailer';
import { IEmailProvider } from '../../interface/IMailProvider';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerProvider implements IEmailProvider {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {

  }
  async sendMail(email: string, message: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      from: this.configService.get('SMTP_TEST_MAIL'), // Remetente
      subject: 'Confirmação de e-mail',
      html: message
    })
  }

}

import { IEmailProvider } from '../../interface/IMailProvider';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerProvider implements IEmailProvider {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {

  }
  async sendConfirmationCreateAccount(data: {email:string, idUser:string, token: string}): Promise<void> {
    await this.mailerService.sendMail({
      to: data.email,
      from: this.configService.get('SMTP_TEST_MAIL'),
      subject: 'Confirmação de e-mail',
      html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmação de e-mail</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                text-align: center;
                color: #444;
              }
              .email-header h1 {
                margin: 0;
                font-size: 24px;
              }
              .email-body {
                margin-top: 20px;
                text-align: center;
              }
              .email-body p {
                font-size: 16px;
                line-height: 1.5;
                color: #666;
              }
              .email-footer {
                margin-top: 30px;
                text-align: center;
                font-size: 14px;
                color: #999;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                margin-top: 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                font-size: 16px;
                border-radius: 4px;
              }
              .button:hover {
                background-color: #0056b3;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <h1>Bem-vindo(a) à Task!</h1>
              </div>
              <div class="email-body">
                <p>Olá, obrigado por se cadastrar! Estamos quase lá.</p>
                <p>Por favor, clique no botão abaixo para confirmar seu e-mail:</p>
                <a href="http://localhost:3000/api/v1/user/confirmarEmail/${data.idUser}/?token=${data.token}" class="button">Confirmar e-mail</a>
                <p>Se você não criou esta conta, ignore este e-mail.</p>
              </div>
              <div class="email-footer">
                <p>&copy; 2024 Task. Todos os direitos reservados.</p>
              </div>
            </div>
          </body>
          </html>`
    
    })
  }

}
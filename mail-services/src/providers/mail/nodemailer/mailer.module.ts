import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerProvider } from './mailer.service';
import { MailerController } from './mailer.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('SMTP_HOST', 'smtp.mailersend.net'), // Host com valor padrão
          port: configService.get<number>('SMTP_PORT', 587), // Porta com valor padrão
          secure: false,
          auth: {
            user: configService.get<string>('SMTP_USERNAME'), // Usuário vindo do .env
            pass: configService.get<string>('SMTP_PASSWORD'), // Senha vindo do .env
          },
          ignoreTLS: false,
        },
        defaults: {
          from: `"No Reply" <${configService.get<string>('MAIL_FROM', 'noreply@seusite.com')}>`,
        },
      }),
    }),
  ],
  controllers:[MailerController],
  providers: [{ provide: 'IMailProvider', useClass: MailerProvider }],
  exports: [MailerModule, { provide: 'IMailProvider', useClass: MailerProvider }]
})
export class MailModule {

}
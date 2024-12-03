import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerProvider } from './mailer.service';

@Module({
  imports:[
    MailerModule.forRoot({
      transport:{
        host: 'smtp.mailgun.org',
        secure:false,
        port: 587,
        auth:{
          user: 'postmaster@sandboxb9dacb511b404059aad7ed4cca931f6b.mailgun.org',
          pass:'42d10daed142fc381ba1d2daa5ae6ba1-f55d7446-6a546dec'
        },
        ignoreTLS: true,
      },
      defaults:{
        from:'"'
      }
    })
  ],
  providers:[{provide:'IMailProvider', useClass: MailerProvider}],
  exports:[MailerModule, 'IMailProvider']
})
export class MailModule{

}
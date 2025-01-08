import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { MailerProvider } from './mailer.service';
import { Controller, Inject } from '@nestjs/common';


@Controller()
export class MailerController{
  constructor (@Inject('IMailProvider') private mailerService:MailerProvider) {
    
  }
  @MessagePattern('send-confirm-account')
  async sendMail(@Payload() data: any){
    console.log(data)
    await this.mailerService.sendConfirmationCreateAccount(data)
  }
}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './user/infra/mongo/user.schema';
import { UserController } from './user/infra/controllers/user.controller';
import { CreateUserService } from './user/services/create-user.service';
import { UserRepository } from './user/infra/mongo/user.repository';
import { FindAllUserService } from './user/services/find-all.service';
import { MailModule } from 'src/shared/providers/mail/nodemailer/mailer.module';
import { TokenModule } from './tokens/token.module';
import { VerifyAccountService } from './user/services/verify-account.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'User', schema: UserModel
    }]),
    MailModule,
    TokenModule
  ],
  controllers:[UserController],
  providers:[CreateUserService, FindAllUserService,VerifyAccountService,{provide: 'IUserRepository', useClass:UserRepository}],
  exports:[CreateUserService,FindAllUserService, VerifyAccountService,'IUserRepository']
})
export class UserModule{}
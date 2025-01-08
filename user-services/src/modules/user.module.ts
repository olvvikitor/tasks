import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './user/infra/mongo/user.schema';
import { CreateUserService } from './user/services/create-user.service';
import { UserRepository } from './user/infra/mongo/user.repository';
import { FindAllUserService } from './user/services/find-all.service';
import { TokenModule } from './tokens/token.module';
import { VerifyAccountService } from './user/services/verify-account.service';
import { UserController } from './user/infra/controllers/user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User', schema: UserModel
    }]),
    TokenModule
  ],
  controllers: [UserController],
  providers: [CreateUserService, FindAllUserService, VerifyAccountService, { provide: 'IUserRepository', useClass: UserRepository }],
  exports: [CreateUserService, FindAllUserService, VerifyAccountService, 'IUserRepository']
})
export class UserModule { }
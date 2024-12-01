import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './user/infra/mongo/user.schema';
import { UserController } from './user/infra/controllers/user.controller';
import { CreateUserService } from './user/services/create-user.service';
import { UserRepository } from './user/infra/mongo/user.repository';
import { FindAllUserService } from './user/services/find-all.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'User', schema: UserModel
    }])
  ],
  controllers:[UserController],
  providers:[CreateUserService, FindAllUserService,{provide: 'IUserRepository', useClass:UserRepository}],
  exports:[CreateUserService,FindAllUserService, 'IUserRepository']
})
export class UserModule{}
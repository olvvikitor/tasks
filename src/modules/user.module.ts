import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './user/infra/mongo/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'User', schema: UserModel
    }])
  ],
  controllers:[],
  providers:[],
  exports:[]
})
export class UserModule{}
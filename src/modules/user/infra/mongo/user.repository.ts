import { Model } from 'mongoose';
import { IUserRepository } from '../../domain/repository/IUserRpository';
import { UserSchema } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { UserMapper } from '../mappers/user-mapper';
import { User } from '../../domain/User';


@Injectable()
export class UserRepository implements IUserRepository<UserSchema>{

  constructor (
    @InjectModel('User') private model:Model<UserSchema>) {
    
  }

  async create(user: UserSchema): Promise<User> {
    const userCreated = await this.model.create(user);
    await userCreated.save()
    return UserMapper.parseToEntity(userCreated)
  }
  async findAll():Promise<User[]>{
    const users = await this.model.find()
    return UserMapper.parseToList(users)
  }

}
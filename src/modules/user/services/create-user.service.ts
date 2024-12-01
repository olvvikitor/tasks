import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/dtos/create-user-dto';
import { IUserRepository } from '../domain/repository/IUserRpository';
import { User } from '../domain/User';
import { UserMapper } from '../infra/mappers/user-mapper';

@Injectable()
export class CreateUserService{
  constructor (
    @Inject('IUserRepository')
    private userRepository:IUserRepository<User>){} 

  async execute(createUserDto: CreateUserDto):Promise<User>{
    return await this.userRepository.create(createUserDto)
  }
}
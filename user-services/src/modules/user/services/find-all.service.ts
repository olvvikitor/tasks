import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../domain/repository/IUserRpository';
import { User } from '../domain/User';

@Injectable()
export class FindAllUserService{
  constructor (
    @Inject('IUserRepository')
    private userRepository:IUserRepository<User>){} 
    async execute():Promise<User[]>{
      return this.userRepository.findAll()
    }
}
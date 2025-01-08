import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/dtos/create-user-dto';
import { IUserRepository } from '../domain/repository/IUserRpository';
import { User } from '../domain/User';
import { CreateTokenService } from 'src/modules/tokens/services/create-token.service';
import { Client, ClientProxy, Ctx, EventPattern, MessagePattern, Payload, RmqContext, Transport } from '@nestjs/microservices';

@Injectable()
export class CreateUserService{


  constructor (
    @Inject('IUserRepository')
    private userRepository:IUserRepository<User>,
    @Inject()
    private createTokenService:CreateTokenService,
  ){} 

  async execute(createUserDto: CreateUserDto):Promise<any>{  

    const user = await this.userRepository.create(createUserDto)
    const token  = await this.createTokenService.execute(user.id)

    const data = {
      email: user.email,
      idUser: user.id,
      token: token
    }
    console.log(data)
    return data
  }
}
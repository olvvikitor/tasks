import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ITokenRepository } from 'src/modules/tokens/domain/repository/ITokenRepository';
import { Token } from 'src/modules/tokens/domain/Token';
import { IUserRepository } from '../domain/repository/IUserRpository';
import { User } from '../domain/User';

@Injectable()
export class VerifyAccountService{
  constructor (@Inject('ITokenRepository') private tokenRepository:ITokenRepository<Token>,
  @Inject('IUserRepository') private userRepository: IUserRepository<User>
) {
    
  }
  async execute(idUser: string, token:string){

    const user = await this.userRepository.findById(idUser)
    const tokenUser = await this.tokenRepository.findByToken(token)

    if(!user){
      return NotFoundException
    }

    if(!token){
      return NotFoundException
    }
    if(idUser != tokenUser.userId){
      return ForbiddenException
    }

    user.isVerified = true

    await this.userRepository.update(user.id, user)

  }
}
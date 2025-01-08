import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ITokenRepository } from 'src/modules/tokens/domain/repository/ITokenRepository';
import { Token } from 'src/modules/tokens/domain/Token';
import { IUserRepository } from '../domain/repository/IUserRpository';
import { User } from '../domain/User';
import { ValidateAccountDto } from '../domain/dtos/vaidate-account-dto';



@Injectable()
export class VerifyAccountService{
  constructor (@Inject('ITokenRepository') private tokenRepository:ITokenRepository<Token>,
  @Inject('IUserRepository') private userRepository: IUserRepository<User>
) {
    
  }
  async execute(data: ValidateAccountDto){

    const user = await this.userRepository.findById(data.idUser)
    const tokenUser = await this.tokenRepository.findByToken(data.token)

    if(!user){
      return NotFoundException
    }

    if(!tokenUser){
      return NotFoundException
    }
    if(data.idUser != tokenUser.userId){
      return ForbiddenException
    }

    user.isVerified = true

    await this.userRepository.update(user.id, user)

  }
}
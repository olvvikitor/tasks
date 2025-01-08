import { Inject, Injectable } from '@nestjs/common';
import { ITokenRepository } from '../domain/repository/ITokenRepository';
import { Token } from '../domain/Token';
import * as crypto from 'crypto'

@Injectable()
export class CreateTokenService{

  constructor (@Inject('ITokenRepository') private tokenRepository:ITokenRepository<Token>) {
    
  }

  async execute(userId:string):Promise<string>{
    const token = crypto.randomBytes(32).toString('hex'); // Use 'base64' se preferir
    const payload = {
      userId : userId,
      token, 
      exipiresAt: new Date(Date.now())
    }
   await this.tokenRepository.create({token: payload.token, exipiresAt: payload.exipiresAt, userId: payload.userId})
   console.log(token)
   return token
  }
}
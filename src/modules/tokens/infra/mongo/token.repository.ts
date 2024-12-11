import { Model } from 'mongoose';
import { ITokenRepository } from '../../domain/repository/ITokenRepository';
import { TokenSchema } from './token.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token } from '../../domain/Token';

@Injectable()
export class TokenRepository implements ITokenRepository<TokenSchema>{

  constructor(@InjectModel('Token') private model:Model<TokenSchema>){}

  async create(createToken: TokenSchema): Promise<void> {
    const createdToken = await this.model.create(createToken);
    await createdToken.save()
  }
  async findByToken(token: string): Promise<Token> {
    return await this.model.findOne({
      token: token
    })
  }

}
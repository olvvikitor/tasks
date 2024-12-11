import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModel } from './infra/mongo/token.schema';
import { TokenRepository } from './infra/mongo/token.repository';
import { CreateTokenService } from './services/create-token.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'Token', schema:TokenModel
    }])
  ],
  providers:[CreateTokenService,{provide:'ITokenRepository', useClass:TokenRepository}],
  exports:['ITokenRepository', CreateTokenService]
})
export class TokenModule{}
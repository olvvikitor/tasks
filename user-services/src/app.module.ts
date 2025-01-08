import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfig } from './configs/mongo/config';
import { UserModule } from './modules/user.module';
import { TokenModule } from './modules/tokens/token.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfig
    }),
    UserModule,TokenModule
  ],
  controllers: [],
  providers: [],
  exports:[MongooseModule]
})
export class AppModule {}

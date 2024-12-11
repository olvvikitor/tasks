import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
  exports:[MongooseModule]
})
export class AppModule {}

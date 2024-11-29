import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfig } from './configs/mongo/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfig
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

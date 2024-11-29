import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';


@Injectable()
export class MongoConfig implements MongooseOptionsFactory{

  constructor (private configService: ConfigService) {
      
  }
  createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    try{
      return {
        uri: this.configService.get('MONGO_STR')
      }
    }
    catch(error){
      console.log(error)
      throw new InternalServerErrorException
    }
  }
  
}
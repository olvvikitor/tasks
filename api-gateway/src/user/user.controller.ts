import { Body, Controller, Get, Inject, Logger, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {ClientProxy, ClientProxyFactory, Payload, Transport} from '@nestjs/microservices'
import { CreateUserDto } from './dto/dtos/create-user-dto';
import { ModuleRef } from '@nestjs/core';
import { UserGatewayService } from './user.gateway.service';


@Controller('api/v1/user')
export class UserController {


  constructor(private moduleRef: ModuleRef) {

  }

  @Post('create')
  async createUser(@Body() data: CreateUserDto){
    const userGatewayService = this.moduleRef.get(UserGatewayService)
    await userGatewayService.createUser(data)
  }
  @Get('confirmarEmail/:id')
  async validateAccount(@Param('id') id:string, @Query('token') token:string){
    const userGatewayService = this.moduleRef.get(UserGatewayService)
    const data = {
      idUser:id,
      token
    }
    await userGatewayService.validateAccount(data)
  }

}

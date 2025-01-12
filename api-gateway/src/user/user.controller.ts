import { Body, Controller, Get, Inject, Logger, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/dtos/create-user-dto';
import { ModuleRef } from '@nestjs/core';
import { UserGatewayService } from './user.gateway.service';
import { TaskGatewayService } from 'src/task/task.gateway.service copy';


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
    const userGatewayService = this.moduleRef.get(UserGatewayService, {strict:false})
    const data = {
      idUser:id,
      token
    }
    await userGatewayService.validateAccount(data)
  }

  @Get('myJobs/:id')
  async getMyTasks(@Param('id') id: string){
    const taskService = this.moduleRef.get(TaskGatewayService, {strict:false})
    return await taskService.getTasksByidUser(id)
  }

}

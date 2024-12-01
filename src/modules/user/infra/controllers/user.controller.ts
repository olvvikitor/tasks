import { Body, Controller, Get, Post } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CreateUserDto } from '../../domain/dtos/create-user-dto';
import { CreateUserService } from '../../services/create-user.service';
import { FindAllUserService } from '../../services/find-all.service';


@Controller('user')
export class UserController{
  constructor (private moduleRef: ModuleRef) {
  }
  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto){
    const createUserService = this.moduleRef.get(CreateUserService, {strict: true})
    return await createUserService.execute(createUserDto)
  }
  @Get('/')
  async findAll(){
    const findAllUserService = this.moduleRef.get(FindAllUserService)
    return await findAllUserService.execute()
  }
}
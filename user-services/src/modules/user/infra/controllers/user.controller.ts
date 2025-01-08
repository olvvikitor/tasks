import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '../../domain/dtos/create-user-dto';
import { Controller } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CreateUserService } from '../../services/create-user.service';
import { VerifyAccountService } from '../../services/verify-account.service';
import { ValidateAccountDto } from '../../domain/dtos/vaidate-account-dto';

@Controller()
export class UserController{

constructor (private modulesRef: ModuleRef) {
  
}

  @MessagePattern('criar-usuario')
  async criar(@Payload() data: CreateUserDto){
    const creatUserService = this.modulesRef.get(CreateUserService)
    return await creatUserService.execute(data)
  }
  @EventPattern('validate-account')
  async validateAccount(@Payload() data:ValidateAccountDto){
    const verifyAccountService = this.modulesRef.get(VerifyAccountService)
    await verifyAccountService.execute(data)
  }
}
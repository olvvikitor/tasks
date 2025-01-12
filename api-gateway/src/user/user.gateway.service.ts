import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { CreateUserDto } from './dto/dtos/create-user-dto';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ValidateAccountDto } from './dto/validate-account-dto';


@Injectable()
export class UserGatewayService {

  constructor(@Inject('USER_QUEUE') private clientProxy: ClientProxy){
  }
  async createUser(data: CreateUserDto): Promise<void> {
    const dados = await firstValueFrom(this.clientProxy.send('criar-usuario', data))
    this.clientProxy.emit('send-confirm-account', dados)
  }
  async validateAccount(data:ValidateAccountDto){
    this.clientProxy.emit('validate-account', data)
  }

}
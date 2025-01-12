import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateTaskDto } from './dto/create-task-dto';


@Injectable()
export class TaskGatewayService {

  constructor(@Inject('TASK_QUEUE') private clientProxy: ClientProxy){
  }
  async createTask(data: CreateTaskDto): Promise<void> {
    const dados = await firstValueFrom(this.clientProxy.emit('create-task', data))
  }
  async getTasksByidUser(id: string):Promise<any[]>{
    console.log(id)
    const dados =  await firstValueFrom(this.clientProxy.send('get-my-tasks', id))
    console.log(dados)
    return dados
  }

}
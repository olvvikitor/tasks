import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { ClientProxy } from '@nestjs/microservices';
import { TaskGatewayService } from './task.gateway.service copy';

@Controller('api/v1/task')
export class TaskController{
  constructor (private taskGateway:TaskGatewayService) {
    
  }

  @Post()
  async createTask(@Body() data:CreateTaskDto){
    await this.taskGateway.createTask(data)
  }
}
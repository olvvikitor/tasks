import { Controller, Inject } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { CreateTaskDto } from '../dto/create-task-dto';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class TaskController{

  constructor (private taskRepository:TaskRepository) {
  }

  @EventPattern('create-task')
  async create(@Payload() data : CreateTaskDto){
    console.log(data)
    return await this.taskRepository.createTask(data)
  }

  @MessagePattern('get-my-tasks')
  async getTaskByIdUser(@Payload() id: string){
    console.log(id)
    return await this.taskRepository.findbyIdUser(id)
  }
}
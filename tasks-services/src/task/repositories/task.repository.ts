import { Inject, Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/config/prisma/prisma.service';


@Injectable()
export class TaskRepository{
  constructor (@Inject() private prismaService : PrismaService) {
  }
  async createTask(data :Prisma.TaskCreateInput):Promise<void>{
    console.log(data)
    await this.prismaService.task.create({
      data:data
    })
  }
  async findbyIdUser(id: string):Promise<Task[] | null>{
    return await this.prismaService.task.findMany({
      where:{
        designated: {
          has: id
        }
        }})
  }
}
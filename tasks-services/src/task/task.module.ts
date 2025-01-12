import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { TaskController } from './controllers/task.controller';
import { TaskRepository } from './repositories/task.repository';

@Module({
  imports:[PrismaModule],
  controllers:[TaskController],
  providers:[TaskRepository]
})
export class TaskModule{}
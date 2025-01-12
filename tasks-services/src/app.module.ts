import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { TaskRepository } from './task/repositories/task.repository';
import { TaskController } from './task/controllers/task.controller';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule,TaskModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}

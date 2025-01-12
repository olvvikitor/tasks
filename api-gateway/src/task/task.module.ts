import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaskController } from './task.controller';
import { TaskGatewayService } from './task.gateway.service copy';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'TASK_QUEUE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'task-queue',
        queueOptions: {
          durable: false
        }
      }
    }])
  ],
  controllers:[TaskController],
  providers:[TaskGatewayService]
})
export class TaskModule { }
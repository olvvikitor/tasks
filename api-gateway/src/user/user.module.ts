import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserGatewayService } from './user.gateway.service';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'USER_QUEUE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user-queue',
        queueOptions: {
          durable: false
        }
      }
    }]),
    TaskModule
  ],
  controllers: [UserController],
  providers: [UserGatewayService],
  exports: []
})
export class UserModule { }

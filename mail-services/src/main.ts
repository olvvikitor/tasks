import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
const logger = new Logger('Main')
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'user-queue',
      queueOptions:{
        durable: false
      }
    },
  });
  logger.log('Microservice is listen') 
  await app.listen()
}
bootstrap();

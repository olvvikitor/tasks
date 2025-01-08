import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as momentTimezone from 'moment-timezone';
import { AllExcepionsFilter } from './filters/AllExcepionsFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExcepionsFilter())
  Date.prototype.toJSON = ():any=>{
    return momentTimezone(this).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS')
  }
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { timestamp } from 'rxjs';

@Catch()
export class AllExcepionsFilter implements ExceptionFilter{
  private readonly logger = new Logger(AllExcepionsFilter.name)
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    console.log(`Exception: ${JSON.stringify(exception)}`)

    const status = 
    exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    const message = exception instanceof HttpException ? exception.getResponse() : exception
    this.logger.error(`http status: ${status} Error message: ${JSON.stringify(message)}`)
    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message
    })
  }
  
}
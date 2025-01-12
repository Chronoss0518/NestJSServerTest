import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

// Basic認証用にエクセプションを加工する.
@Catch(HttpException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    if(HttpStatus.UNAUTHORIZED == status){
      // Basic認証ダイアログ用に付与.
      response.set('WWW-Authenticate', 'Basic realm="aaa"');
    }
    response
      .status(status)
      .json({
        statusCode: status,
      });
  }
}
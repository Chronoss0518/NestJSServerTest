import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Observable } from 'rxjs'

const API_KEY :string = 'api_key';
const HEADER_NAME : string = 'Authorization';

@Injectable()
export class AuthApiKeyGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    let apiKey = request.headers.authorization || '';
    return apiKey === API_KEY;
  }
}
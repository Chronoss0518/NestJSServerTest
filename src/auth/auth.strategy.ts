import { BasicStrategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// Basic認証
@Injectable()
export class AuthStrategy extends PassportStrategy(BasicStrategy, 'auth') {
  constructor() {
    super();
  }

  async validate(username: string, password: string) {
    // ユーザとパスワード
    if((username != 'test') || (password != 'test')){
      return false;
    }
    return true;
  }
}
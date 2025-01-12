import { BasicStrategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

const USER_NAME :string ='test';
const PASSWORD :string ='test';

// Basic認証
@Injectable()
export class AuthBasicStrategy extends PassportStrategy(BasicStrategy, 'auth_basic') {
  constructor() {
    super();
  }

  async validate(username: string, password: string) {
    if(
        (username != USER_NAME) ||
        (password != PASSWORD)
    )
    {
      return false;
    }

    return true;
  }
}
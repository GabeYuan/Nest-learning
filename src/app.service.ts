import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getuser(): string {
    return 'Hi, Yuan Genbao!';
  }
}

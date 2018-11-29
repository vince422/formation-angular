import { Injectable } from '@angular/core';
import {AppModule} from './app.module';

@Injectable()
export class LoggerService {

  constructor() { }

  log(message: any): void {
    console.log(message);
  }
}

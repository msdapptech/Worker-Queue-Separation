import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(    
    @InjectQueue('MainQueue') private readonly queue: Queue  
  ) {}

  getHello(): string {
    this.queue.add({
      message: `Message sent at: ${Date.now().toString()}`,
    })
    return 'Hello World!';
  }
}

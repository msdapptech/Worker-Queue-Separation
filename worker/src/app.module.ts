import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppProcessor } from './app.processor';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'MainQueue',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [],
  providers: [AppProcessor],
})
export class AppModule {}

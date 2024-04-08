import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}

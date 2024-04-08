import { Controller, Get } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get()
  getHello() {
    console.log(`Sending request...`);

    // this crashes the app after 10s
    this.amqpConnection.request({
      exchange: 'exchange1',
      routingKey: 'whatever',
      payload: {},
    });

    // this crashes the app after 10s too
    // try {
    //   this.amqpConnection.request({
    //     exchange: 'exchange1',
    //     routingKey: 'whatever',
    //     payload: {},
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    // publish does not crash the app
    // this.amqpConnection.publish('exchange1', 'whatever', {});

    return 1;
  }
}

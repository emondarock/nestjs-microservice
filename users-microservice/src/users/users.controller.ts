import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Controller()
export class UserMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log('Received request to create user', data);
    return data
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log('Received payment created event', data);
  }
}
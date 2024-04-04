import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Controller('users')

export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('Received request to create user', createUserDto);

    return this.natsClient.send({
      cmd: 'createUser'
    }, createUserDto);
  }
}
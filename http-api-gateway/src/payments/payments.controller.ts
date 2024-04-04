import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }
  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    console.log('Received request to create payment', createPaymentDto);

    this.natsClient.emit('createPayment', createPaymentDto);
    // return this.natsClient.send({
    //   cmd: 'createPayment'
    // }, createPaymentDto);
  }
}
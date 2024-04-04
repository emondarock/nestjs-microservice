import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Controller()
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentDto) {
    console.log('Received request to create payment', data);
    this.natsClient.emit('paymentCreated', data);
    // return data
  }
}
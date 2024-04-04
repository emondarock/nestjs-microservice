import { Module } from "@nestjs/common";
import { UserMicroserviceController } from "./users.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
  imports: [NatsClientModule],
  controllers: [UserMicroserviceController],
  providers: []
})
export class UsersModule { }
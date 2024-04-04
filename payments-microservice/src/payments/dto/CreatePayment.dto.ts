import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength } from "class-validator";

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  description: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}
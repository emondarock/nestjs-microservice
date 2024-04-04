import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  username: string;

  @IsString()
  @IsOptional()
  @MaxLength(64)
  displayName?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

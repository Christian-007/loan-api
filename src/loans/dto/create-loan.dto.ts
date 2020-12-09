import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsNumber()
  loanAmount: number;

  @IsNotEmpty()
  @IsNumber()
  loanPeriodInMonths: number;

  @IsNotEmpty()
  @Type(() => CreateUserDto)
  @ValidateNested()
  user: CreateUserDto;
}

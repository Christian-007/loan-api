import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateLoanDto } from './dto/create-loan.dto';
import { GetLoanDto } from './dto/get-loan.dto';
import { LoansService } from './loans.service';
import { UsersService } from 'src/users/users.service';

@Controller('loans')
export class LoansController {
  constructor(
    private loansService: LoansService,
    private usersService: UsersService,
  ) {}

  @Get()
  async findAll(): Promise<GetLoanDto[]> {
    const loans = await this.loansService.findAll();
    return loans;
  }

  @Post()
  async create(@Body() createLoanDto: CreateLoanDto): Promise<GetLoanDto> {
    const createdUser = await this.usersService.create(createLoanDto.user);
    const loan = await this.loansService.create(createLoanDto, createdUser);

    return loan;
  }
}

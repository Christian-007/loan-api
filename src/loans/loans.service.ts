import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLoanDto } from './dto/create-loan.dto';
import { Loan } from './loan.entity';

import { User } from 'src/users/user.entity';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan) private loanRepository: Repository<Loan>,
  ) {}

  findAll(): Promise<Loan[]> {
    return this.loanRepository.find({ relations: ['user'] });
  }

  async create(createLoanDto: CreateLoanDto, user: User): Promise<Loan> {
    const loan = new Loan();
    loan.loanAmount = createLoanDto.loanAmount;
    loan.loanPeriodInMonths = createLoanDto.loanPeriodInMonths;
    loan.user = user;

    const savedLoan = await this.loanRepository.save(loan);
    return savedLoan;
  }
}

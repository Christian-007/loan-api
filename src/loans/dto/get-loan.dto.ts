import { User } from 'src/users/user.entity';

export class GetLoanDto {
  loanId: number;
  loanAmount: number;
  loanPeriodInMonths: number;
  user: User;
}

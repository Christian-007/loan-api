import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  loanId: number;

  @Column()
  loanAmount: number;

  @Column()
  loanPeriodInMonths: number;

  @ManyToOne(() => User, (user: User) => user.loans)
  user: User;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Loan } from 'src/loans/loan.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  pin: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mediaSource: string;

  @OneToMany(() => Loan, (loan: Loan) => loan.user)
  loans: Loan[];
}

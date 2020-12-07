import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  pin: number;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mediaSource: string;
}

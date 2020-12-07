import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = createUserDto.email;
    user.pin = createUserDto.pin;
    user.phoneNumber = createUserDto.phoneNumber;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.mediaSource = createUserDto.mediaSource;

    const savedUser = this.usersRepository.save(user);
    return savedUser;
  }
}

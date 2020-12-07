import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<GetUserDto[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @Post()
  async create(@Body() newUser: CreateUserDto): Promise<GetUserDto> {
    const user = await this.usersService.create(newUser);
    const userDto: GetUserDto = {
      id: user.id,
      email: user.email,
      pin: user.pin,
      phoneNumber: user.phoneNumber,
      firstName: user.firstName,
      lastName: user.lastName,
      mediaSource: user.mediaSource,
    };

    return userDto;
  }
}

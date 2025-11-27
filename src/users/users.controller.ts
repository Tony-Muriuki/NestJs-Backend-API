import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} //created an instance of Userservice Class inside controller
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers() {
    return this.usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  // Create User
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    await this.usersService.createUser(user);
    console.log(typeof user, user);
    console.log(user instanceof CreateUserDto);
    return 'A new user Has Been Created';
  }
}

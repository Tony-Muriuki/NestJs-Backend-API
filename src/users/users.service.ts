//Users Service
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  //Returns all Users
  getAllUsers() {
    return this.userRepository.find();
  }

  //Create User
  public async createUser(userDto: CreateUserDto) {
    //Create A Profile & Save
    userDto.profile = userDto.profile ?? {};

    //Create User Object
    const user = this.userRepository.create(userDto);

    //Save The User Object
    return await this.userRepository.save(user);
  }
}

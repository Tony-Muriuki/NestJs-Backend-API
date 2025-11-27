import { Injectable } from '@nestjs/common';

import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
  //DI
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  //Method
  public getAllProfiles() {
    return this.profileRepository.find({
      relations: {
        user: true,
      },
    });
  }
}

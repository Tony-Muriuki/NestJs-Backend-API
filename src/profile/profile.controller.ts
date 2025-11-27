import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  //Dependency Injection
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  public getProfiles() {
    return this.profileService.getAllProfiles();
  }
}

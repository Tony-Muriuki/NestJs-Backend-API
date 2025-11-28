import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweets.entity';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Tweet])],
})
export class TweetsModule {}

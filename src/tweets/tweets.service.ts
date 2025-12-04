/* eslint-disable prefer-const */
//Tweets Service
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  //Methods

  //Get All Tweets
  getAllTweets() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTweets(userId: number) {}

  public async CreateTweet(createTweetDto: CreateTweetDto) {
    //Find user with the given userid from user Table
    let user = await this.userService.FindUserById(createTweetDto.userId);
    //2:Create A Tweet
    // eslint-disable-next-line @typescript-eslint/await-thenable
    let tweet = await this.tweetRepository.create({
      ...createTweetDto,
      user: user,
    });
    //3:Save The Tweet
    return await this.tweetRepository.save(tweet);
  }
}

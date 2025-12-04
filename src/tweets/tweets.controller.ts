import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetsService: TweetsService) {}

  //Get all Tweets
  @Get()
  getAllTweets() {
    return this.tweetsService.getAllTweets();
  }

  @Get(':userId') // https://localhost:3000/tweets/101 This get route should get all the tweets which this userid has made.
  public GetTweets(@Param('userId', ParseIntPipe) userId: number) {
    console.log(userId);
    return this.tweetsService.getTweets(userId);
  }
  @Post()
  public async CreateTweet(@Body() tweet: CreateTweetDto) {
    return await this.tweetsService.CreateTweet(tweet);
  }
}

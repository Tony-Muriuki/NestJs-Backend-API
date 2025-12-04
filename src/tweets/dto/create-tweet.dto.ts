import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  image?: string; //image url orbinary data of the image
}

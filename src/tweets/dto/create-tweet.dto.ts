import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  image?: string; //image url orbinary data of the image

  @IsNotEmpty()
  @IsInt()
  userId: number;
}

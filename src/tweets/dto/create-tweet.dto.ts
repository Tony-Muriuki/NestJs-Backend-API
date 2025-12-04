import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  image?: string;
}

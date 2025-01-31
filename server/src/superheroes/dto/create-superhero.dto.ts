import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  power: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  humility: number;
}

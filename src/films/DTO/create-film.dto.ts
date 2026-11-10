import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateFilmDto {
  @IsString()
  @IsNotEmpty()
  judul: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsInt()
  @Min(1900)
  @Max(2030)
  tahun: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  rating: number;

  @IsOptional()
  @IsBoolean()
  sudahDitonton?: boolean;
}
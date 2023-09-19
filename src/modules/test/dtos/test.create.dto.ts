import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDate,
  IsNumber,
} from 'class-validator';

export class TestCreateDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @Type(() => String)
  readonly testStr: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly testNum: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly testDate: Date;
}

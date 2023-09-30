import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { 
  IsNotEmpty, 
  IsNumber 
} from "class-validator";

export class OrderProductCreateDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @Type(() => String)
  readonly title: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @Type(() => String)
  readonly description: string;

  @ApiProperty({
    required: true,
  })
  @IsNumber()
  @Type(() => Number)
  readonly price: number;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  @Type(() => String)
  readonly img: string;

  @ApiProperty({
    required: false,
  })
  @Type(() => String)
  readonly labelText?: string;

  @ApiProperty({
    required: false,
  })
  @Type(() => String)
  readonly pizzaSettings?: string
};

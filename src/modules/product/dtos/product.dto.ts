import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    MaxLength,
    MinLength,
    IsEnum,
    IsNumber,
} from 'class-validator';
import { ENUM_PRODUCT_TYPE } from 'src/modules/product/constants/product.enum.constant';

export class ProductDto {
    @ApiProperty({
        description: 'Name of product',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @Type(() => String)
    readonly title: string;
    
    @ApiProperty({
        description: 'Description of product',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    @Type(() => String)
    readonly description: string;
    
    @ApiProperty({
        description: 'Price of product',
        required: true,
    })
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    readonly price: number;

    @ApiProperty({
        description: 'img of product',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly img: string;

    @ApiProperty({
        description: 'Label text of product',
        required: false,
    })
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @Type(() => String)
    readonly labelText?: string;

    @ApiProperty({
        description: 'Settings of pizza',
        required: false,
    })
    @IsString()
    @MinLength(3)
    @MaxLength(1000)
    @Type(() => String)
    readonly pizzaSettings?: string;

    @ApiProperty({
        description: 'Representative for product type',
        required: true,
    })
    @IsEnum(ENUM_PRODUCT_TYPE)
    readonly type?: ENUM_PRODUCT_TYPE;
}

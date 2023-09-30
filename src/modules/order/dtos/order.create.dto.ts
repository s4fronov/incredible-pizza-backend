import { ApiProperty } from '@nestjs/swagger';
import { OrderProductCreateDto } from 'src/modules/order/dtos/order.product.create.dto';
import { Type } from 'class-transformer';
import {
    IsNotEmpty,
    IsPhoneNumber
} from 'class-validator';

export class OrderCreateDto {
    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @Type(() => String)
    readonly userName: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsPhoneNumber()
    @Type(() => String)
    readonly mobileNumber: string;

    @ApiProperty()
    @Type(() => String)
    readonly email: string;

    @ApiProperty({
        required: true,
    })
    @Type(() => String)
    readonly street: string;

    @ApiProperty({
        required: true,
    })
    @Type(() => String)
    readonly house: string;

    @ApiProperty()
    @Type(() => String)
    readonly porch: string;

    @ApiProperty()
    @Type(() => String)
    readonly floor: string;

    @ApiProperty()
    @Type(() => String)
    readonly apartment: string;

    @ApiProperty()
    @Type(() => String)
    readonly porchCode: string;

    @ApiProperty()
    @Type(() => String)
    readonly change: string;

    @ApiProperty()
    @Type(() => String)
    readonly pickup: string;

    @ApiProperty()
    @Type(() => String)
    readonly paymentType: string;

    @ApiProperty()
    @Type(() => String)
    readonly changeType: string;

    @ApiProperty()
    @Type(() => String)
    readonly deliveryType: string;

    @ApiProperty()
    @Type(() => String)
    readonly comment: string;

    @ApiProperty()
    @Type(() => String)
    readonly date: string;

    @ApiProperty()
    @Type(() => String)
    readonly time: string;

    @ApiProperty({
        required: true,
    })
    @Type(() => Array)
    readonly products: OrderProductCreateDto[];
}

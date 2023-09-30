import { ApiTags } from "@nestjs/swagger";
import { AuthJwtUserAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { 
    Body, 
    Controller, 
    Post } from "@nestjs/common";
import { UserProtected } from 'src/modules/user/decorators/user.decorator';
import { Response } from 'src/common/response/decorators/response.decorator';
import { OrderService } from "src/modules/order/services/order.service";
import { OrderCreateDoc } from "src/modules/order/docs/order.doc";
import { OrderCreateDto } from "src/modules/order/dtos/order.create.dto";
import { IResponse } from "src/common/response/interfaces/response.interface";

@ApiTags('modules.order')
@Controller({
    version: '1',
    path: '/order',
})
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ) {}

    @OrderCreateDoc()
    @Response('order.create')
    // @AuthJwtUserAccessProtected()
    // @UserProtected()
    @Post('/create')
    async create(@Body()
        { ...body }: OrderCreateDto
    ): Promise<IResponse> {
        const create = await this.orderService.create({ ...body});

        return {
            data: { orderNumber: create.orderNumber },
        };
    }
}

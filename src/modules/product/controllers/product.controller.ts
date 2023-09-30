import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from 'src/modules/product/services/product.service';
import { ProductEntity } from 'src/modules/product/repository/entities/product.entity';
import { ProductListDoc } from 'src/modules/product/docs/product.doc'
import { IResponse } from 'src/common/response/interfaces/response.interface';

@ApiTags('modules.product')
@Controller({
    version: '1',
    path: '/product',
})
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @ProductListDoc()
    @Get('/listByType/:type')
    async listByType(
        @Param('type') type: string
): Promise<IResponse> {

        const products: ProductEntity[] = await this.productService.findAllByType(type.toUpperCase());

        return {
            data: products,
        };
    }
}

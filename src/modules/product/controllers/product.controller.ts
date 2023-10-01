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
import { Throttle } from '@nestjs/throttler';

@ApiTags('modules.product')
@Controller()
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @ProductListDoc()
    @Throttle(4, 3)
    @Get('/list')
    async list(): Promise<IResponse> {

        const products: ProductEntity[] = await this.productService.findAll();

        return {
            data: products,
        };
    }

    @ProductListDoc()
    @Throttle(32, 3)
    @Get('/list/:type')
    async listByType(
        @Param('type') type: string
): Promise<IResponse> {

        const products: ProductEntity[] = await this.productService.findAllByType(type.toUpperCase());

        return {
            data: products,
        };
    }
}

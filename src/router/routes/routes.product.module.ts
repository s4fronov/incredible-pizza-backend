import { Module } from '@nestjs/common';
import { ProductController } from 'src/modules/product/controllers/product.controller';
import { ProductModule } from 'src/modules/product/product.module';

@Module({
    controllers: [ProductController],
    providers: [],
    exports: [],
    imports: [ProductModule, ],
})
export class RoutesProductModule {}

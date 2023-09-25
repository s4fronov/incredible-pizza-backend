import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductRepositoryModule } from 'src/modules/product/repository/product.repository.module';

@Module({
    controllers: [],
    providers: [ProductService],
    exports: [ProductService],
    imports: [ProductRepositoryModule],
})
export class ProductModule {}

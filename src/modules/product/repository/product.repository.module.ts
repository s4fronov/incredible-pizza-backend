import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    ProductEntity,
    ProductSchema,
} from 'src/modules/product/repository/entities/product.entity';
import { ProductRepository } from 'src/modules/product/repository/repositories/product.repository';

@Module({
    providers: [ProductRepository],
    exports: [ProductRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: ProductEntity.name,
                    schema: ProductSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class ProductRepositoryModule {}

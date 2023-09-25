import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import {
    ProductDoc,
    ProductEntity,
} from 'src/modules/product-type/repository/entities/product.entity';

@Injectable()
export class ProductRepository extends DatabaseMongoUUIDRepositoryAbstract<
    ProductEntity,
    ProductDoc
> {
    constructor(
        @DatabaseModel(ProductEntity.name)
        private readonly productModel: Model<ProductEntity>
    ) {
        super(productModel);
    }
}

import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { ENUM_PRODUCT_TYPE } from 'src/modules/product/constants/product.enum.constant';

export const ProductDatabaseName = 'product';

@DatabaseEntity({ collection: ProductDatabaseName })
export class ProductEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: true,
        // lowercase: true,
        // minlength: 3,
        // maxlength: 30,
        type: String,
    })
    title: string;

    @Prop({
        required: false,
        // minlength: 3,
        // maxlength: 100,
        type: String,
    })
    description: string;

    @Prop({
        required: true,
        type: Number,
    })
    price: number;

    @Prop({
        required: true,
        type: String,
    })
    img: string;

    @Prop({
        required: false,
        // minlength: 3,
        // maxlength: 100,
        type: String,
    })
    labelText?: string;

    @Prop({
        required: true,
        enum: ENUM_PRODUCT_TYPE,
        type: String,
    })
    type: ENUM_PRODUCT_TYPE;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);

export type ProductDoc = ProductEntity & Document;

ProductSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
    this.title = this.title.toLowerCase();

    next();
});

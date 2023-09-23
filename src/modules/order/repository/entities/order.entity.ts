import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { 
    ENUM_PAYMENT_TYPE, 
    ENUM_CHANGE_TYPE, 
    ENUM_DELIVERY_TYPE, 
    ENUM_STATUS_TYPE,
} from 'src/modules/order/constants/order.enum.constants';

export const OrderDatabaseName = 'orders';

export class AddressEntity {
    @Prop({
        required: true,
        type: String,
    })
    street: string;

    @Prop({
        required: true,
        type: String,
    })
    house: string;

    @Prop({ 
        required: false,
        type: String, 
    })
    porch?: string;

    @Prop({ 
        required: false,
        type: String,
    })
    floor?: string;

    @Prop({ 
        required: false,
        type: String, 
    })
    apartment?: string;

    @Prop({ 
        required: false,
        type: String, 
    })
    porchCode?: string;
};

@DatabaseEntity({ collection: OrderDatabaseName })
export class OrderEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({ 
        required: false,
        type: String, 
    })
    orderCreateDate: string;
    
    @Prop({ 
        required: false,
        type: String, 
    })
    orderNumber: string;

    @Prop({ 
        required: false,
        enum: ENUM_STATUS_TYPE,
        default: ENUM_STATUS_TYPE.PROCESSED,
        type: String,
     })
    status?: ENUM_STATUS_TYPE;

    @Prop({
        required: true,
        type: String,
        maxlength: 100,
    })
    userName: string;

    @Prop({
        required: true,
        type: String,
    })
    mobileNumber: string;

    @Prop({
        required: false,
        type: String,
        maxlength: 100,
    })
    email?: string;

    @Prop({ 
        required: true,
        _id: false,
        type: {
            street: String,
            house: String,
            porch: String,
            floor: String,
            apartment: String,
            porchCode: String,
        }
    })
    address: AddressEntity;

    @Prop({ 
        required: false,
        type: String, 
    })
    change?: string;

    @Prop({
        required: false,
        type: String,
        maxlength: 100,
    })
    pickup: string;

    @Prop({ 
        required: true,
        enum: ENUM_PAYMENT_TYPE,
        type: String,
    })
    paymentType: ENUM_PAYMENT_TYPE;

    @Prop({ 
        required: true,
        enum: ENUM_CHANGE_TYPE,
        type: String,
    })
    changeType: ENUM_CHANGE_TYPE;

    @Prop({ 
        required: true,
        enum: ENUM_DELIVERY_TYPE,
        type: String,
    })
    deliveryType: ENUM_DELIVERY_TYPE;

    @Prop({
        required: false,
        type: String,
        maxlength: 1000,
    })
    comment: string;

    @Prop({ 
        required: false,
        type: String, 
    })
    time: string;

    @Prop({ 
        required: false,
        type: String, 
    })
    date: string;
}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);

export type OrderDoc = OrderEntity & Document;

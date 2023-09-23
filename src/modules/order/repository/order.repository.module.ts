import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    OrderEntity,
    OrderSchema,
} from 'src/modules/order/repository/entities/order.entity';
import { OrderRepository } from 'src/modules/order/repository/repositories/order.repository';

@Module({
    providers: [OrderRepository],
    exports: [OrderRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: OrderEntity.name,
                    schema: OrderSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class OrderRepositoryModule {}
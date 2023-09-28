import { Module } from '@nestjs/common';
import { OrderRepositoryModule } from 'src/modules/order/repository/order.repository.module';
import { OrderService } from 'src/modules/order/services/order.service';

@Module({
    imports: [OrderRepositoryModule],
    exports: [OrderService],
    providers: [OrderService],
    controllers: [],
})
export class OrderModule { };

import { Injectable } from '@nestjs/common';
import { IDatabaseCreateOptions} from 'src/common/database/interfaces/database.interface';
import { IOrderService } from 'src/modules/order/interfaces/order.service.interface';
import { OrderCreateDto } from 'src/modules/order/dtos/order.create.dto';
import { 
    OrderDoc, 
    OrderEntity 
} from 'src/modules/order/repository/entities/order.entity';
import { OrderRepository } from 'src/modules/order/repository/repositories/order.repository';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
import { AddressEntity } from 'src/modules/order/repository/entities/order.address.entity';
import { OrderProductEntity } from 'src/modules/order/repository/entities/order.product.entity';

@Injectable()
export class OrderService implements IOrderService {
    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly helperDateService: HelperDateService,
        private readonly helperStringService: HelperStringService,
        ) {}

    async create(
        { ...dto }: OrderCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<OrderDoc> {
        const addressEntity: AddressEntity = new AddressEntity();
        addressEntity.street = dto.street;
        addressEntity.house = dto.house;
        addressEntity.porch = dto.porch;
        addressEntity.floor = dto.floor;
        addressEntity.apartment = dto.apartment;
        addressEntity.porchCode = dto.porchCode;

        const products: OrderProductEntity[] = [];
        dto.products.forEach((item) => {
            const productEntity: OrderProductEntity = new OrderProductEntity();
            productEntity.title = item.title;
            productEntity.description = item.description;
            productEntity.price = item.price;
            productEntity.img = item.img;
            productEntity.labelText = item.labelText ?? '';
            productEntity.pizzaSettings = item.pizzaSettings ?? '';

            products.push(productEntity);
        });

        const orderEntity: OrderEntity = new OrderEntity();
        orderEntity.address = addressEntity;
        orderEntity.orderCreateDate = this.helperDateService.create().toLocaleString();
        orderEntity.orderNumber = 
            orderEntity.orderCreateDate.substring(0,2) 
            + orderEntity.orderCreateDate.substring(3,5) 
            + orderEntity.orderCreateDate.substring(6,10)  
            + this.helperStringService.random(4);
        orderEntity.userName = dto.userName;
        orderEntity.mobileNumber = dto.mobileNumber;
        orderEntity.email = dto.email;
        orderEntity.change = dto.change ?? '';
        orderEntity.pickup = dto.pickup ?? '';
        orderEntity.paymentType = parseInt(dto.paymentType);
        orderEntity.changeType = parseInt(dto.changeType);
        orderEntity.deliveryType = parseInt(dto.deliveryType);
        orderEntity.comment = dto.comment;
        orderEntity.date = dto.date ? new Date(dto.date).toLocaleString('ru-RU').substring(0, 10) : '';
        orderEntity.time = dto.date ? new Date(dto.time).toLocaleString('ru-RU').substring(12) : '';
        orderEntity.products = products;

        return this.orderRepository.create<OrderEntity>(orderEntity, options);
    }
}

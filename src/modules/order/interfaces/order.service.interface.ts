import { IDatabaseCreateOptions } from 'src/common/database/interfaces/database.interface';
import { OrderCreateDto } from 'src/modules/order/dtos/order.create.dto';
import { OrderDoc } from 'src/modules/order/repository/entities/order.entity';

export interface IOrderService {
  create(
      data: OrderCreateDto,
      options?: IDatabaseCreateOptions
  ): Promise<OrderDoc>;
}

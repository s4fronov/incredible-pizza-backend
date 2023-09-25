import { IDatabaseCreateManyOptions } from 'src/common/database/interfaces/database.interface';
import { ProductCreateDto } from 'src/modules/product-type/dtos/product.create.dto';

export interface IProductService {
    createMany(
        data: ProductCreateDto[],
        options?: IDatabaseCreateManyOptions
    ): Promise<boolean>;
}

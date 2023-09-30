import { IDatabaseCreateManyOptions, IDatabaseFindAllOptions } from 'src/common/database/interfaces/database.interface';
import { ProductDto } from 'src/modules/product/dtos/product.dto';
import { ProductEntity } from 'src/modules/product/repository/entities/product.entity';

export interface IProductService {
    findAllByType(
        type: string,
        options?: IDatabaseFindAllOptions
    ): Promise<ProductEntity[]>;
    
    createMany(
        data: ProductDto[],
        options?: IDatabaseCreateManyOptions
    ): Promise<boolean>;

}

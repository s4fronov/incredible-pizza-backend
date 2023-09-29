import { IDatabaseCreateManyOptions, IDatabaseFindAllOptions } from 'src/common/database/interfaces/database.interface';
import { ProductCreateDto } from 'src/modules/product/dtos/product.create.dto';
import { ProductEntity } from 'src/modules/product/repository/entities/product.entity';

export interface IProductService {
    findAllByType(
        type: string,
        options?: IDatabaseFindAllOptions
    ): Promise<ProductEntity[]>;
    
    createMany(
        data: ProductCreateDto[],
        options?: IDatabaseCreateManyOptions
    ): Promise<boolean>;

}

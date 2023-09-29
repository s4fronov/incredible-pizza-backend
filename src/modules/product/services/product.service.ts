import { Injectable } from '@nestjs/common';
import { IDatabaseCreateManyOptions, IDatabaseFindAllOptions } from 'src/common/database/interfaces/database.interface';
import { ProductCreateDto } from 'src/modules/product/dtos/product.create.dto';
import { IProductService } from 'src/modules/product/interfaces/product.service.interface';
import { ProductEntity } from 'src/modules/product/repository/entities/product.entity';
import { ProductRepository } from 'src/modules/product/repository/repositories/product.repository';

@Injectable()
export class ProductService implements IProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async findAllByType(
        type: string,
        options?: IDatabaseFindAllOptions
    ): Promise<ProductEntity[]> {
        return this.productRepository.findAll<ProductEntity>({ type }, options);
    }

    async createMany(
        data: ProductCreateDto[],
        options?: IDatabaseCreateManyOptions
    ): Promise<boolean> {
        const create: ProductEntity[] = data.map(({ 
            title, 
            description, 
            price, img, 
            labelText, 
            type 
        }) => {
            const entity: ProductEntity = new ProductEntity();
            entity.title = title;
            entity.description = description;
            entity.price = price;
            entity.img = img;
            entity.labelText = labelText;
            entity.type = type;

            return entity;
        });
        return this.productRepository.createMany<ProductEntity>(create, options);
    }
}

import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/modules/product-type/services/product.service';
import { ENUM_PRODUCT_TYPE } from 'src/modules/product-type/constants/product.enum.constant';
import { ProductCreateDto } from 'src/modules/product-type/dtos/product.create.dto';

@Injectable()
export class MigrationProductSeed {
    constructor(private readonly productService: ProductService) {}

    @Command({
        command: 'seed:product',
        describe: 'seed product',
    })
    async seeds(): Promise<void> {
        const dataProducts: ProductCreateDto[] = [
            {
                title: 'pizza',
                description: 'description',
                price: 100,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/pizza/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.PIZZA,
            },

            {
                title: 'sauce',
                description: 'description',
                price: 200,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/sauce/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.SAUCE,
            },
            {
                title: 'snack',
                description: 'description',
                price: 300,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/snack/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.PIZZA,
            },
            {
                title: 'sushi',
                description: 'description',
                price: 100,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/sushi/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.SUSHI,
            },
            {
                title: 'drink',
                description: 'description',
                price: 200,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/drink/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.DRINK,
            },
            {
                title: 'dessert',
                description: 'description',
                price: 300,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/dessert/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.DESSERT,
            },
            {
                title: 'combo',
                description: 'description',
                price: 500,
                img: 'http://194.87.210.5:5000/incredible-pizza/products/combo/01.webp',
                labelText: 'labelText',
                type: ENUM_PRODUCT_TYPE.COMBO,
            },
        ];

        try {
            await this.productService.createMany(dataProducts);
        } catch (err: any) {
            throw new Error(err.message);
        }

        return;
    }
}

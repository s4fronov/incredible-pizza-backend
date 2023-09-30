import { applyDecorators } from '@nestjs/common';
import {
    Doc,
} from 'src/common/doc/decorators/doc.decorator';

export function ProductListDoc(): MethodDecorator {
    return applyDecorators(
        Doc({
            operation: 'modules.product',
        }),
    );
}
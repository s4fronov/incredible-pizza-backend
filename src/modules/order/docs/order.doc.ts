import { applyDecorators } from '@nestjs/common';
import {
    Doc,
    DocAuth,
    DocGuard,
    DocResponse,
} from 'src/common/doc/decorators/doc.decorator';

export function OrderCreateDoc(): MethodDecorator {
    return applyDecorators(
        Doc({
            operation: 'modules.order',
        }),
        DocAuth({
            jwtAccessToken: true,
        }),
        DocGuard({ role: true }),
        DocResponse('order.create')
    );
}

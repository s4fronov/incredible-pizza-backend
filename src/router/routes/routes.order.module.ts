import { Module } from '@nestjs/common';
import { AuthModule } from 'src/common/auth/auth.module';
import { OrderController } from 'src/modules/order/controllers/order.controller';
import { OrderModule } from 'src/modules/order/order.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [OrderController],
    providers: [],
    exports: [],
    imports: [OrderModule, UserModule, AuthModule,],
})
export class RoutesOrderModule {}

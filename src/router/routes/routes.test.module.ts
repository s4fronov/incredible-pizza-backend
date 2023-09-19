import { Module } from '@nestjs/common';
import { AuthModule } from 'src/common/auth/auth.module';
import { TestController } from 'src/modules/test/controllers/test.controller';
import { TestModule } from 'src/modules/test/test.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [TestController],
    providers: [],
    exports: [],
    imports: [TestModule, UserModule, AuthModule,],
})
export class RoutesTestModule {}

import { Module } from '@nestjs/common';
import { TestRepositoryModule } from 'src/modules/test/repository/test.repository.module';
import { TestService } from 'src/modules/test/services/test.service';

@Module({
    imports: [TestRepositoryModule],
    exports: [TestService],
    providers: [TestService],
    controllers: [],
})
export class TestModule {}

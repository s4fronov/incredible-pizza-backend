import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    TestEntity,
    TestSchema,
} from 'src/modules/test/repository/entities/test.entity';
import { TestRepository } from 'src/modules/test/repository/repositories/test.repository';

@Module({
    providers: [TestRepository],
    exports: [TestRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: TestEntity.name,
                    schema: TestSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class TestRepositoryModule {}
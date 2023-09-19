import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import {
    TestDoc,
    TestEntity,
} from 'src/modules/test/repository/entities/test.entity';

@Injectable()
export class TestRepository extends DatabaseMongoUUIDRepositoryAbstract<
    TestEntity,
    TestDoc
> {
    constructor(
        @DatabaseModel(TestEntity.name)
        private readonly testModel: Model<TestEntity>
    ) {
        super(testModel);
    }
}

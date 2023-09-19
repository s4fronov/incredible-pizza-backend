import { Injectable } from '@nestjs/common';
import {
    IDatabaseCreateOptions,
    IDatabaseFindAllOptions,
    IDatabaseFindOneOptions,
    IDatabaseGetTotalOptions,
} from 'src/common/database/interfaces/database.interface';
import { ITestService } from 'src/modules/test/interfaces/test.service.interface';
import { TestCreateDto } from 'src/modules/test/dtos/test.create.dto';
import {
    TestDoc,
    TestEntity,
} from 'src/modules/test/repository/entities/test.entity';
import { TestRepository } from 'src/modules/test/repository/repositories/test.repository';

@Injectable()
export class TestService implements ITestService {
    constructor(private readonly testRepository: TestRepository) {}

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<TestEntity[]> {
        return this.testRepository.findAll<TestEntity>(find, options);
    }

    async findOneById(
        _id: string,
        options?: IDatabaseFindOneOptions
    ): Promise<TestDoc> {
        return this.testRepository.findOneById<TestDoc>(_id, options);
    }

    async findOne(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<TestDoc> {
        return this.testRepository.findOne<TestDoc>(find, options);
    }

    async findOneByName(
        name: string,
        options?: IDatabaseFindOneOptions
    ): Promise<TestDoc> {
        return this.testRepository.findOne<TestDoc>({ name }, options);
    }

    async getTotal(
        find?: Record<string, any>,
        options?: IDatabaseGetTotalOptions
    ): Promise<number> {
        return this.testRepository.getTotal(find, options);
    }

    async create(
        { testDate, testNum, testStr }: TestCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<TestDoc> {
        const create: TestEntity = new TestEntity();
        create.testDate = testDate;
        create.testNum = testNum;
        create.testStr = testStr;

        return this.testRepository.create<TestEntity>(create, options);
    }
}

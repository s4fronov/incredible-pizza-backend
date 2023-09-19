import {
  IDatabaseCreateOptions,
  IDatabaseFindAllOptions,
  IDatabaseFindOneOptions,
  IDatabaseGetTotalOptions,
} from 'src/common/database/interfaces/database.interface';
import { TestCreateDto } from 'src/modules/test/dtos/test.create.dto';
import {
  TestDoc,
  TestEntity,
} from 'src/modules/test/repository/entities/test.entity';

export interface ITestService {
  findAll(
      find?: Record<string, any>,
      options?: IDatabaseFindAllOptions
  ): Promise<TestEntity[]>;
  findOneById(
      _id: string,
      options?: IDatabaseFindOneOptions
  ): Promise<TestDoc>;
  findOne(
      find: Record<string, any>,
      options?: IDatabaseFindOneOptions
  ): Promise<TestDoc>;
  findOneByName(
      name: string,
      options?: IDatabaseFindOneOptions
  ): Promise<TestDoc>;
  getTotal(
      find?: Record<string, any>,
      options?: IDatabaseGetTotalOptions
  ): Promise<number>;
  create(
      data: TestCreateDto,
      options?: IDatabaseCreateOptions
  ): Promise<TestDoc>;
}

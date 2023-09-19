import { ApiTags } from "@nestjs/swagger";
import { AuthJwtUserAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { 
    Body, 
    Controller, 
    Post } from "@nestjs/common";
import { UserProtected } from 'src/modules/user/decorators/user.decorator';
import { Response } from 'src/common/response/decorators/response.decorator';
import { TestService } from "src/modules/test/services/test.service";
import { TestCreateDoc } from "src/modules/test/docs/test.doc";
import { TestCreateDto } from "src/modules/test/dtos/test.create.dto";
import { IResponse } from "src/common/response/interfaces/response.interface";

@ApiTags('modules.test')
@Controller({
    version: '1',
    path: '/test',
})
export class TestController {
    constructor(
        private readonly testService: TestService
    ) {}

    @TestCreateDoc()
    @Response('test.create')
    @UserProtected()
    @AuthJwtUserAccessProtected()
    @Post('/post')
    async create(@Body()
        { testStr, testNum, testDate }: TestCreateDto
    ): Promise<IResponse> {
        const create = await this.testService.create({
            testStr, 
            testNum, 
            testDate
        });

        return {
            data: { _id: create._id },
        };
    }
}

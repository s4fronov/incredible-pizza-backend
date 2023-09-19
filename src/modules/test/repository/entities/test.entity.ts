import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

export const TestDatabaseName = 'tests';

@DatabaseEntity({ collection: TestDatabaseName })
export class TestEntity {
    @Prop({
        required: true,
        sparse: true,
        index: true,
        trim: true,
        type: String,
        unique: true,
        maxlength: 100,
    })
    testStr: string;

    @Prop({
        required: true,
        default: 0,
        type: Number,
    })
    testNum: number;

    @Prop({
        required: true,
        type: Date,
    })
    testDate: Date;
}

export const TestSchema = SchemaFactory.createForClass(TestEntity);

export type TestDoc = TestEntity & Document;

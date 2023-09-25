import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { ApiKeyModule } from 'src/common/api-key/api-key.module';
import { AuthModule } from 'src/common/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { UserModule } from 'src/modules/user/user.module';
import { RoleModule } from 'src/modules/role/role.module';
import { ProductModule } from 'src/modules/product-type/product.module';
import { MigrationApiKeySeed } from 'src/migration/seeds/migration.api-key.seed';
import { MigrationSettingSeed } from 'src/migration/seeds/migration.setting.seed';
import { MigrationRoleSeed } from 'src/migration/seeds/migration.role.seed';
import { MigrationUserSeed } from 'src/migration/seeds/migration.user.seed';
import { MigrationProductSeed } from 'src/migration/seeds/migration.product.seed';

@Module({
    imports: [
        CommonModule,
        CommandModule,
        ApiKeyModule,
        AuthModule,
        RoleModule,
        UserModule,
        ProductModule,
    ],
    providers: [
        MigrationApiKeySeed,
        MigrationSettingSeed,
        MigrationRoleSeed,
        MigrationUserSeed,
        MigrationProductSeed,
    ],
    exports: [],
})
export class MigrationModule {}
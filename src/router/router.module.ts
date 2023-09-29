import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';
import { RoutesAdminModule } from 'src/router/routes/routes.admin.module';
import { RoutesUserModule } from 'src/router/routes/routes.user.module';
import { RoutesPublicModule } from 'src/router/routes/routes.public.module';
import { AppController } from 'src/app/controllers/app.controller';
import { RoutesAuthModule } from 'src/router/routes/routes.auth.module';
import { RoutesOrderModule } from 'src/router/routes/routes.order.module';
import { RoutesProductModule } from 'src/router/routes/routes.product.module';

@Module({})
export class RouterModule {
    static forRoot(): DynamicModule {
        const imports: (
            | DynamicModule
            | Type<any>
            | Promise<DynamicModule>
            | ForwardReference<any>
        )[] = [];

        if (process.env.HTTP_ENABLE === 'true') {
            imports.push(
                RoutesPublicModule,
                RoutesUserModule,
                RoutesAdminModule,
                RoutesAuthModule,
                RoutesOrderModule,
                RoutesProductModule,
                NestJsRouterModule.register([
                    {
                        path: '/public',
                        module: RoutesPublicModule,
                    },
                    {
                        path: '/admin',
                        module: RoutesAdminModule,
                    },
                    {
                        path: '/user',
                        module: RoutesUserModule,
                    },
                    {
                        path: '/auth',
                        module: RoutesAuthModule,
                    },
                    {
                        path: '/order',
                        module: RoutesOrderModule,
                    },
                    {
                        path: '/product',
                        module: RoutesProductModule,
                    },
                ])
            );
        }

        return {
            module: RouterModule,
            providers: [],
            exports: [],
            controllers: [AppController],
            imports,
        };
    }
}

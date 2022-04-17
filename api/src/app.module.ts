import { MulterConfigModule } from '#config/multer/config.module';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ThrottlerConfigModule } from '#config/throttler/config.module';
import { GqlConfigModule } from '#config/gql/config.module';
import { AppConfigModule } from '#config/app/config.module';
import { PostgreDatabaseProviderModule } from '#providers/database/postgres/provider.module';
import { AuthModule } from '#authentication/auth.module';
import { CodesModule } from '#models/codes/codes.module';
import { ConfigsModule } from '#models/configs/configs.module';
import { UsersModule } from '#models/users/users.module';
import { FilesModule } from '#models/files/files.module';
import { RoutesModule } from '#models/routes/routes.module';
import { RolesGuard } from '#common/guards/roles.guard';
import { GqlThrottlerGuard } from '#common/guards/gql-throttler.guard';

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [
    AppConfigModule,
    PostgreDatabaseProviderModule,
    ThrottlerConfigModule,
    GqlConfigModule,
    MulterConfigModule,
    AuthModule,
    FilesModule,
    CodesModule,
    ConfigsModule,
    RoutesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

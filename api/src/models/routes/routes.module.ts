import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutesRepository } from '#models/routes/routes.repository';
import { RoutesResolver } from '#models/routes/routes.resolver';
import { RoutesService } from '#models/routes/routes.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoutesRepository])],
  providers: [RoutesService, RoutesResolver],
  exports: [RoutesService],
})
export class RoutesModule {}

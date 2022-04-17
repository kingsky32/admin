import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsRepository } from '#models/configs/configs.repository';
import { ConfigsResolver } from '#models/configs/configs.resolver';
import { ConfigsService } from '#models/configs/configs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigsRepository])],
  providers: [ConfigsService, ConfigsResolver],
  exports: [ConfigsService],
})
export class ConfigsModule {}

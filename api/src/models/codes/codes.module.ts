import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodesRepository } from '#models/codes/codes.repository';
import { CodesResolver } from '#models/codes/codes.resolver';
import { CodesService } from '#models/codes/codes.service';

@Module({
  imports: [TypeOrmModule.forFeature([CodesRepository])],
  providers: [CodesService, CodesResolver],
  exports: [CodesService],
})
export class CodesModule {}

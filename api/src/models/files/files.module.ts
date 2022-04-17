import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesRepository } from './files.repository';
import { FilesResolver } from '#models/files/files.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FilesRepository])],
  providers: [FilesService, FilesResolver],
  exports: [FilesService],
})
export class FilesModule {}

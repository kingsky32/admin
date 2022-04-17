import { FilesRepository } from './files.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '#models/files/entities/files.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FilesRepository)
    private readonly filesRepository: FilesRepository,
  ) {}

  async create(file: Express.MulterS3.File): Promise<File | null> {
    return this.filesRepository.create({
      uri: file.location,
      filename: file.originalname,
      mimetype: file.mimetype,
    });
  }
}

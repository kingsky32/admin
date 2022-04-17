import { File } from '#models/files/entities/files.entity';
import { ModelRepository } from '#models/model.repository';
import { EntityRepository } from 'typeorm';

@EntityRepository(File)
export class FilesRepository extends ModelRepository<File> {}

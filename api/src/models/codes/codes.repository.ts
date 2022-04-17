import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { Code } from '#models/codes/entities/codes.entity';

@EntityRepository(Code)
export class CodesRepository extends ModelRepository<Code> {}

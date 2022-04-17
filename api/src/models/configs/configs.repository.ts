import { Config } from '#models/configs/entities/configs.entity';
import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';

@EntityRepository(Config)
export class ConfigsRepository extends ModelRepository<Config> {}

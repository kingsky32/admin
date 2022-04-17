import { Repository } from 'typeorm';

export class ModelRepository<T> extends Repository<T> {}

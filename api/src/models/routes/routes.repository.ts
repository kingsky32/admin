import { Route } from '#models/routes/entities/routes.entity';
import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';

@EntityRepository(Route)
export class RoutesRepository extends ModelRepository<Route> {}

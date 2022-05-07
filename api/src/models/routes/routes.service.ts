import { CreateRouteDto } from '#models/routes/dtos/routes.dto';
import { IRoute } from '#models/routes/interfaces/routes.interface';
import { RoutesRepository } from '#models/routes/routes.repository';
import { Route } from '#models/routes/entities/routes.entity';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions } from 'typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RoutesRepository)
    private readonly routesRepository: RoutesRepository,
  ) {}

  async create(createRouteDto: CreateRouteDto): Promise<Route> {
    const route: IRoute = {
      uri: createRouteDto.uri,
      label: createRouteDto.label,
      icon: createRouteDto.icon,
    };

    if (createRouteDto.parent) {
      const parent: IRoute = await this.get({ uri: createRouteDto.parent });
      if (parent) {
        route.parent = parent;
      } else {
        throw new NotFoundException('Cannot find parent');
      }
    }

    return this.routesRepository.create(route);
  }

  async get(conditions: FindConditions<Route>): Promise<Route> {
    return this.routesRepository.findOne(conditions);
  }

  async getAll(): Promise<Route[]> {
    return this.routesRepository.find({ relations: ['parent'] });
  }

  async delete(uri: string): Promise<boolean> {
    const { affected } = await this.routesRepository.delete({ uri });
    if (affected < 1) {
      throw new ConflictException('No elements were deleted');
    }
    return true;
  }
}

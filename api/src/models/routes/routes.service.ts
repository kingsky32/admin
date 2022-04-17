import { CreateRouteDto } from '#models/routes/dtos/routes.dto';
import { RoutesRepository } from '#models/routes/routes.repository';
import { Route } from '#models/routes/entities/routes.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RoutesRepository)
    private readonly routesRepository: RoutesRepository,
  ) {}

  async create(createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routesRepository.create(createRouteDto);
  }

  async getAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  async delete(uri: string): Promise<boolean> {
    const { affected } = await this.routesRepository.delete({ uri });
    if (affected < 1) {
      throw new ConflictException('No elements were deleted');
    }
    return true;
  }
}

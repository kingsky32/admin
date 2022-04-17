import { RoutesService } from '#models/routes/routes.service';
import { CreateRouteDto } from '#models/routes/dtos/routes.dto';
import { Route } from '#models/routes/entities/routes.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RoutesResolver {
  constructor(private readonly routesService: RoutesService) {}

  @Mutation(() => Route)
  route(@Args() createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routesService.create(createRouteDto);
  }

  @Query(() => [Route])
  routes(): Promise<Route[]> {
    return this.routesService.getAll();
  }
}

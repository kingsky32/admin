import { ConfigsService } from '#models/configs/configs.service';
import { CreateConfigDto } from '#models/configs/dtos/codes.dto';
import { Config } from '#models/configs/entities/configs.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ConfigsResolver {
  constructor(private readonly configsService: ConfigsService) {}

  @Mutation(() => Config)
  config(@Args() createConfigDto: CreateConfigDto): Promise<Config> {
    return this.configsService.create(createConfigDto);
  }

  @Query(() => [Config])
  configs(): Promise<Config[]> {
    return this.configsService.getAll();
  }
}

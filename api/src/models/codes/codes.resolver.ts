import { CodesService } from '#models/codes/codes.service';
import { CreateCodeDto } from '#models/codes/dtos/configs.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Code } from '#models/codes/entities/codes.entity';

@Resolver()
export class CodesResolver {
  constructor(private readonly codesService: CodesService) {}

  @Mutation(() => Code)
  code(@Args() createCodeDto: CreateCodeDto): Promise<Code> {
    return this.codesService.create(createCodeDto);
  }

  @Query(() => [Code])
  codes(): Promise<Code[]> {
    return this.codesService.getAll();
  }
}

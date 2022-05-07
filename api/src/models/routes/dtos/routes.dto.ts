import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRouteDto {
  @Field(() => String)
  uri: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  icon: string;

  @Field(() => String)
  parent: string;
}

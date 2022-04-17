import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateConfigDto {
  @Field(() => String)
  key: string;

  @Field(() => String)
  value: string;
}

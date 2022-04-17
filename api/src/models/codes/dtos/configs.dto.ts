import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateCodeDto {
  @Field(() => String)
  code: string;

  @Field(() => String)
  label: string;

  @Field(() => Boolean)
  isActive: boolean;
}

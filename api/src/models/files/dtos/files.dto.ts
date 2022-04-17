import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@ArgsType()
export class UploadFileDto {
  @Field(() => GraphQLUpload)
  file: FileUpload;
}

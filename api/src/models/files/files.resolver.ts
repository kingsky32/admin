import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@Resolver()
export class FilesResolver {
  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    const file = await new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', (response) => resolve(response))
        .on('error', (error) => reject(error)),
    );

    console.log(file);
    return true;
  }
}

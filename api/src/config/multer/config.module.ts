import { MulterModule } from '@nestjs/platform-express';
import configuration from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { MulterConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MULTER_DEST: Joi.string().default('./upload'),
      }),
    }),
    MulterModule.registerAsync({
      imports: [MulterConfigModule],
      useExisting: MulterConfigService,
    }),
  ],
  providers: [ConfigService, MulterConfigService],
  exports: [ConfigService, MulterConfigService],
})
export class MulterConfigModule {}

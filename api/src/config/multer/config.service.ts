import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  constructor(private configService: ConfigService) {}

  get dest(): string {
    return this.configService.get<string>('multer.dest');
  }

  createMulterOptions(): Promise<MulterModuleOptions> | MulterModuleOptions {
    return {
      dest: this.dest,
    };
  }
}

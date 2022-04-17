import { CreateConfigDto } from '#models/configs/dtos/codes.dto';
import { ConfigsRepository } from '#models/configs/configs.repository';
import { Config } from '#models/configs/entities/configs.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectRepository(ConfigsRepository)
    private readonly configsRepository: ConfigsRepository,
  ) {}

  async create(createConfigDto: CreateConfigDto): Promise<Config> {
    return this.configsRepository.create(createConfigDto);
  }

  async getAll(): Promise<Config[]> {
    return this.configsRepository.find();
  }

  async delete(key: string): Promise<boolean> {
    const { affected } = await this.configsRepository.delete({ key });
    if (affected < 1) {
      throw new ConflictException('No elements were deleted');
    }
    return true;
  }
}

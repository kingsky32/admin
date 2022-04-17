import { Code } from '#models/codes/entities/codes.entity';
import { CodesRepository } from '#models/codes/codes.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCodeDto } from '#models/codes/dtos/configs.dto';

@Injectable()
export class CodesService {
  constructor(
    @InjectRepository(CodesRepository)
    private readonly codesRepository: CodesRepository,
  ) {}

  async create(createCodeDto: CreateCodeDto): Promise<Code> {
    return this.codesRepository.create(createCodeDto);
  }

  async getAll(): Promise<Code[]> {
    return this.codesRepository.find({ where: { isActive: true } });
  }

  async delete(code: string): Promise<boolean> {
    const { affected } = await this.codesRepository.delete({ code });
    if (affected < 1) {
      throw new ConflictException('No elements were deleted');
    }
    return true;
  }
}

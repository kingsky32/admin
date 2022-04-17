import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { ICode } from '#models/codes/interfaces/codes.interface';

@Entity({ name: 'codes' })
@ObjectType()
export class Code implements ICode {
  @Column({ type: 'text', primary: true })
  @Field(() => String)
  code: string;

  @Column({ type: 'text' })
  @Field(() => String)
  label: string;

  @Column({ name: 'is_active', type: 'boolean' })
  @Field(() => Boolean)
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;
}

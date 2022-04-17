import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { IConfig } from '#models/configs/interfaces/menus.interface';

@Entity({ name: 'configs' })
@ObjectType()
export class Config implements IConfig {
  @Column({ type: 'text', primary: true })
  @Field(() => String)
  key: string;

  @Column({ type: 'text' })
  @Field(() => String)
  value: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;
}

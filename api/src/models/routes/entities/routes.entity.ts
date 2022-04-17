import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { IRoute } from '#models/routes/interfaces/routes.interface';

@Entity({ name: 'routes' })
@ObjectType()
export class Route implements IRoute {
  @Column({ type: 'text', primary: true })
  @Field(() => String)
  uri: string;

  @Column({ type: 'text' })
  @Field(() => String)
  label: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  icon: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;
}

/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  currency: string;
  @Column('int')
  amount: number;
  @Column({ default: true })
  isActive: boolean;
}

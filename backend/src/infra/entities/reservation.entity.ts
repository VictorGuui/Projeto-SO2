import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  roomName!: string

  @Column()
  roomPhoto!: string

  @Column()
  roomLocation!: string

  @Column()
  dateOfUse!: Date

  @Column()
  startTime!: string

  @Column()
  endTime!: string

  @Column()
  responsible!: string

  @Column('text', { nullable: true })
  reason!: string;

  @Column('text', { nullable: true })
  additionalInfo!: string;

  @Column('text', { nullable: true })
  guests!: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ default: null })
  photo_url!: string

  @Column()
  location!: string

  @Column()
  date!: Date

  @Column('time')
  startTime!: Date

  @Column('time')
  endTime!: Date

  @Column()
  responsible!: string

  @Column()
  reason!: string

  @Column()
  info!: string

  @Column()
  guests!: string
}
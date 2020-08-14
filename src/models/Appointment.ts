import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointment')
class Appointment {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') // ID будет в формате UUID (как в ТЗ)
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' }) // Роли: admin или user
  role: string;
}

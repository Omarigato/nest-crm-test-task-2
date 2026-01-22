import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid') // Уникальный идентификатор
  id: string;

  @Column()
  user_id: string; // ID пользователя

  @Column({ length: 1000 })
  description: string; // Описание (1-1000 символов)

  @Column({ length: 1000, nullable: true })
  comment: string; // Комментарии (1-1000 символов)

  @CreateDateColumn()
  created_at: Date; // Дата создания

  @UpdateDateColumn()
  updated_at: Date; // Дата обновления
}
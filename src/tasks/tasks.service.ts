import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto, userId: string) {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      user_id: userId, // Автоматически привязываем к юзеру
    });
    return await this.tasksRepository.save(task);
  }

  async findAll() {
    // Бизнес-правило №2: Новые задачи первыми
    return await this.tasksRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  // Метод для обновления задачи
  async update(id: string, updateTaskDto: any, userId: string) {
    // Бизнес-правило №4: ищем задачу только этого пользователя
    const task = await this.tasksRepository.findOne({ 
      where: { id, user_id: userId } 
    });

    if (!task) {
      throw new NotFoundException('Задача не найдена или у вас нет прав');
    }

    Object.assign(task, updateTaskDto);
    return await this.tasksRepository.save(task);
  }

  // Метод для удаления задачи
  async remove(id: string, userId: string) {
    // Удаляем задачу, только если она принадлежит юзеру
    const result = await this.tasksRepository.delete({ id, user_id: userId });

    if (result.affected === 0) {
      throw new NotFoundException('Задача не найдена или у вас нет прав');
    }
    return { success: true };
  }
}
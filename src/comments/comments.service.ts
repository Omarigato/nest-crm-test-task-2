import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  // Правило 4: Только автор (через userId) может создать комментарий
  async create(createCommentDto: CreateCommentDto, userId: string) {
    const comment = this.commentRepository.create({
      ...createCommentDto,
      user_id: userId,
    });
    return await this.commentRepository.save(comment);
  }

  // Правило 3: Комментарии возвращаются отсортированными по дате (новые первыми)
  async findAll(taskId: string) {
    return await this.commentRepository.find({
      where: { task_id: taskId },
      order: { created_at: 'DESC' }, // DESC = новые сверху
    });
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) throw new NotFoundException('Комментарий не найден');
    return comment;
  }

  // Правило 1: Редактировать может только его пользователь
  async update(id: string, updateCommentDto: UpdateCommentDto, userId: string) {
    const comment = await this.findOne(id);
    if (comment.user_id !== userId) throw new ForbiddenException('Вы не можете редактировать чужой комментарий');
    
    return await this.commentRepository.save({ ...comment, ...updateCommentDto });
  }

  // Правило 1: Удалять может только его пользователь
  async remove(id: string, userId: string) {
    const comment = await this.findOne(id);
    if (comment.user_id !== userId) throw new ForbiddenException('Вы не можете удалить чужой комментарий');
    
    await this.commentRepository.remove(comment);
    return { success: true };
  }
}
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard) // Защищаем все действия с комментариями
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Request() req: any) {
    return this.commentsService.create(createCommentDto, req.user.sub);
  }

  @Get() // Получаем по task_id: /comments?task_id=xxx
  findAll(@Query('task_id') taskId: string) {
    return this.commentsService.findAll(taskId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto, @Request() req: any) {
    return this.commentsService.update(id, updateCommentDto, req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.commentsService.remove(id, req.user.sub);
  }
}
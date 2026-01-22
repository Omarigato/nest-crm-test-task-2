import { Controller, Post, Body, Get, UseGuards, Request, Param, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard) // Защищаем эндпоинт
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: any, @Request() req: any) {
    // req.user.sub — это ID юзера из твоего токена
    return this.tasksService.create(createTaskDto, req.user.sub);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: any, @Request() req: any) {
    return this.tasksService.update(id, updateTaskDto, req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.tasksService.remove(id, req.user.sub);
  }
}
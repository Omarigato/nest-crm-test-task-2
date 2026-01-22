import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Импортируй это
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity'; // Импортируй сущность
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    // Вот эта строка решает твою ошибку!
    TypeOrmModule.forFeature([Task]),
    AuthModule, // Импортируем AuthModule для использования AuthGuard
  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService], // Необязательно, но полезно
})
export class TasksModule {}
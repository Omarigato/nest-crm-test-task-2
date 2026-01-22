import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comment } from './entities/comment.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]), // Обязательно добавь это!
    AuthModule, // Импортируем AuthModule для использования AuthGuard
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
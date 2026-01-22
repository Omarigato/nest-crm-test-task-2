import { IsString, Length, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @Length(1, 1000, { message: 'Текст комментария должен быть от 1 до 1000 символов' })
  text: string;

  @IsUUID()
  task_id: string;
}
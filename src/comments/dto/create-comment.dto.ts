import { IsString, Length, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'This is a comment', description: 'Content of the comment' })
  @IsString()
  @Length(1, 1000, { message: 'Comment text must be between 1 and 1000 characters' })
  text: string;

  @ApiProperty({ example: 'uuid-string', description: 'Task ID' })
  @IsUUID()
  task_id: string;
}
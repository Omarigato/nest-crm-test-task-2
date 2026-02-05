import { IsString, Length, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ example: 'Complete the project', description: 'Task description' })
    @IsString()
    @Length(1, 1000)
    description: string;

    @ApiProperty({ example: 'Additional notes', required: false })
    @IsOptional()
    @IsString()
    @Length(1, 1000)
    comment?: string;
}

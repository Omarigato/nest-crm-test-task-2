import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto, userId: string): Promise<Task>;
    findAll(): Promise<Task[]>;
    update(id: string, updateTaskDto: any, userId: string): Promise<Task>;
    remove(id: string, userId: string): Promise<{
        success: boolean;
    }>;
}

import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto, userId: string): unknown;
    findAll(): unknown;
    update(id: string, updateTaskDto: any, userId: string): unknown;
    remove(id: string, userId: string): unknown;
}

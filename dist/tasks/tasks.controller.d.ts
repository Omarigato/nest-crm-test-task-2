import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: any, req: any): unknown;
    findAll(): unknown;
    update(id: string, updateTaskDto: any, req: any): unknown;
    remove(id: string, req: any): unknown;
}

import { User } from '../../users/entities/user.entity';
import { Task } from '../../tasks/entities/task.entity';
export declare class Comment {
    id: string;
    text: string;
    task_id: string;
    user_id: string;
    task: Task;
    user: User;
    created_at: Date;
    updated_at: Date;
}

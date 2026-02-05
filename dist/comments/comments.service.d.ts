import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto, userId: string): Promise<Comment>;
    findAll(taskId: string): Promise<Comment[]>;
    findOne(id: string): Promise<Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto, userId: string): Promise<{
        text: string;
        task_id: string;
        id: string;
        user_id: string;
        task: import("../tasks/entities/task.entity").Task;
        user: import("../users/entities/user.entity").User;
        created_at: Date;
        updated_at: Date;
    } & Comment>;
    remove(id: string, userId: string): Promise<{
        success: boolean;
    }>;
}

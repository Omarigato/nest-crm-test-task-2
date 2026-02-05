import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto, req: any): Promise<import("./entities/comment.entity").Comment>;
    findAll(taskId: string): Promise<import("./entities/comment.entity").Comment[]>;
    findOne(id: string): Promise<import("./entities/comment.entity").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto, req: any): Promise<{
        text: string;
        task_id: string;
        id: string;
        user_id: string;
        task: import("../tasks/entities/task.entity").Task;
        user: import("../users/entities/user.entity").User;
        created_at: Date;
        updated_at: Date;
    } & import("./entities/comment.entity").Comment>;
    remove(id: string, req: any): Promise<{
        success: boolean;
    }>;
}

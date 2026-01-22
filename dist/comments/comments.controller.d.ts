import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto, req: any): unknown;
    findAll(taskId: string): unknown;
    findOne(id: string): unknown;
    update(id: string, updateCommentDto: UpdateCommentDto, req: any): unknown;
    remove(id: string, req: any): unknown;
}

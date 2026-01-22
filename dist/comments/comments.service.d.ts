import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto, userId: string): unknown;
    findAll(taskId: string): unknown;
    findOne(id: string): unknown;
    update(id: string, updateCommentDto: UpdateCommentDto, userId: string): unknown;
    remove(id: string, userId: string): unknown;
}

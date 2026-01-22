import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): any;
    findByEmail(email: string): Promise<User | null>;
    findOne(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
}

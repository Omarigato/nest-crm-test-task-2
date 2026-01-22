import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;
    
    // Хешируем пароль для безопасности
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = this.usersRepository.create({
      ...userData,
      password: hashedPassword,
    });
    
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    // Исправленный метод поиска
    return this.usersRepository.findOne({ where: { email } });
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user || undefined;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOneBy({ id });
    return user || undefined;
  }
}
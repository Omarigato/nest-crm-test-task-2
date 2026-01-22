import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../auth/auth.guard';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // Теперь регистрация открыта для всех!
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard) // Защищаем только получение списка
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard) // И поиск конкретного юзера
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
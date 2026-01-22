import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Некорректный email' }) // Убери лишнюю запятую внутри скобок, если она там есть
  email: string;

  @IsString()
  @MinLength(3, { message: 'Пароль слишком короткий' })
  password: string;
}
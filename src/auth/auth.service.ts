import { Injectable, UnauthorizedException, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    
    // Проверяем, существует ли пользователь вообще
    if (!user) {
      throw new UnauthorizedException('Ошибка: Неверный e-mail или пароль');
    }
  
    // Теперь TypeScript спокоен, так как мы проверили наличие user
    const isMatch = await bcrypt.compare(pass, user.password);
  
    if (!isMatch) {
      throw new UnauthorizedException('Ошибка: Неверный e-mail или пароль');
    }
  
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
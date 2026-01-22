import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException('Токен не предоставлен');
    }
    
    try {
      // JwtModule помечен как global: true, поэтому JwtService уже знает секрет из конфигурации
      const payload = await this.jwtService.verifyAsync(token);
      
      // Присваиваем payload к request для использования в контроллерах
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Неверный токен');
    }
    
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}


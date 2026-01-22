import { Module, forwardRef } from '@nestjs/common'; // Добавь forwardRef сюда
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(() => UsersModule), // <--- МЕНЯЕМ ЗДЕСЬ
    JwtModule.register({
      global: true,
      secret: 'SECRET_KEY_123',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // Импортируем инструмент
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Эта строка заставляет сервер проверять длину текста и типы данных
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Удаляет поля, которых нет в DTO
    forbidNonWhitelisted: true, // Выдает ошибку, если прислали лишние поля
    transform: true, // Автоматически превращает данные в нужные типы
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
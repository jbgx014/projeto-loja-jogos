/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe()); // garante que as validações sejam executadas para todas as requisições que utilizam essas entidades.

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  const isProd = process.env.NODE_ENV === 'production';

	app.enableCors({
		origin: isProd ? true : ['http://127.0.0.1:3000', 'http://localhost:3000'],
		credentials: true,
	});

  const port = Number(process.env.PORT) || 8000;
  await app.listen(port);
}
bootstrap();

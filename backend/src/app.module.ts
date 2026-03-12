import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NotesController } from './notes/notes.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'], // можно убрать, если env приходит только из docker
    }),
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from 'books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

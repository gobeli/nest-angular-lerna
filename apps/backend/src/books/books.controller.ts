import { Controller, Get } from '@nestjs/common';
import { CrudController } from '@app/nest-crud';
import { BookEntity } from './book.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController extends CrudController<BookEntity> {
  constructor(service: BooksService) {
    super(service);
  }

  @Get()
  async getAll(): Promise<any> {
    return this.service.findAll();
  }
}

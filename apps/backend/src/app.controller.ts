import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from '@app/interfaces';

@Controller()
export class AppController {
  book: Book;

  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}

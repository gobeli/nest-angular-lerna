import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Entity } from '@app/interfaces';
import { Observable } from 'rxjs';
import { CrudService } from '@app/angular-crud';

@Injectable()
export class BooksService extends CrudService<Book> {
  constructor(http: HttpClient) {
    super(http, '/api/books');
  }
}

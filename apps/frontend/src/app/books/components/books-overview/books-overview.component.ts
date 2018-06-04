import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@app/interfaces';
import { BooksService } from '../../services/books.service';
import { LoadingService } from '../../../core/services/loading.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss'],
})
export class BooksOverviewComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.books$ = this.booksService.getAll();
  }
}

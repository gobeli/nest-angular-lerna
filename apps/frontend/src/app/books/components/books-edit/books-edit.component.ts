import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../core/services/loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss'],
})
export class BooksEditComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  });
  loading$: Subject<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private loadingService: LoadingService,
  ) {
    this.loading$ = loadingService.loading$;
  }

  ngOnInit() {}

  onSubmit() {
    const id = +this.route.snapshot.params['id'];
    const book = this.bookForm.value;
    let command = id
      ? this.booksService.update({ ...book, id })
      : this.booksService.create(book);

    command.subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

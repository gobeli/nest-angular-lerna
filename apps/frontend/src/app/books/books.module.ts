import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { BooksOverviewComponent } from './components/books-overview/books-overview.component';
import booksRouting from './books-routing';
import { BooksService } from './services/books.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksEditComponent } from './components/books-edit/books-edit.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ClarityModule, booksRouting],
  declarations: [BooksOverviewComponent, BooksEditComponent],
  providers: [BooksService],
})
export class BooksModule {}

import { Routes, RouterModule } from '@angular/router';
import { BooksOverviewComponent } from './components/books-overview/books-overview.component';
import { BooksEditComponent } from './components/books-edit/books-edit.component';

export default RouterModule.forChild([
  { path: '', component: BooksOverviewComponent },
  { path: 'edit/:id', component: BooksEditComponent },
]);

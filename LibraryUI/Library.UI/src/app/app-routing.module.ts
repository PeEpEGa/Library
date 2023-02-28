import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'addbook',
    component: AddBookComponent
  },
  {
    path: 'editbook/:id',
    component: EditBookComponent,
    children: [
      {
        path: 'editbook/a/:id',
        component: ViewBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

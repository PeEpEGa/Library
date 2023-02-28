import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { ViewBookComponent } from '../view-book/view-book.component';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  constructor(private booksService: BooksService, public matDialog: MatDialog, private location: Location, private router: Router) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe({
      next: (books) => {
        let temp: Book[] = Object.values(books)[0] as Book[];
        let booksToAdd : Book[] = temp.map((obj, i) => ({ ...obj, rating: Number((Math.round(obj.rating.valueOf() * 100) / 100).toFixed(2))}));
        this.books = booksToAdd;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }


  //constructor(public matDialog: MatDialog) { }
  // changeURL(id: string){
  //   this.location.replaceState('/' + 'viewallbooks/' + id);
  // }

}

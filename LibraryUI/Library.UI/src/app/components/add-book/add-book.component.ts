import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewBook } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookRequest: NewBook = {
    id: 0,
    title: '',
    cover: '',
    content: '',
    author: '',
    genre: ''
  };

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }


  addBook() {
    this.bookService.addBook(this.addBookRequest).subscribe({
      next: (book) => {
        //console.log(book);
        this.router.navigate(['']);
      },

    });
    console.log(this.addBookRequest);
  }
}

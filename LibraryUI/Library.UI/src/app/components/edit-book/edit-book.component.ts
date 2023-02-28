import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInfo, NewBook } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  updateBookDetails: BookInfo = {
    id: 0,
    title: '',
    cover: '',
    content: '',
    author: '',
    genre: '',
    rating: 0,
    reviews: []
  };

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(this.route);

        if(id) {
          this.bookService.getBook(id).subscribe({
            next: (resposne) => {
              this.updateBookDetails = Object.values(resposne)[0] as BookInfo;
            }
          })
        }
      }
    })
  }


  updateBook() {
    let bookToUpdate: NewBook = {
      id: this.updateBookDetails.id,
      title: this.updateBookDetails.title,
      cover: this.updateBookDetails.cover,
      content: this.updateBookDetails.content,
      author: this.updateBookDetails.author,
      genre: this.updateBookDetails.genre
    }
    this.bookService.updateBook(bookToUpdate).subscribe({
      next: (response) => {
        this.router.navigate(['']);
      }
    });
  }


  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe({
      next: (response) =>
      {
        this.router.navigate(['']);
      }
    });
  }


  openModal() {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = false;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "650px";
      dialogConfig.width = "600px";
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(ViewBookComponent, dialogConfig);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInfo } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookDetails: BookInfo = {
    id: 0,
    title: '',
    cover: '',
    content: '',
    author: '',
    genre: '',
    rating: 0,
    reviews: []
  };


  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe({
  //     next: (params) => {
  //       const id = params.get('id');
  //       console.log(id);
  //     }
  //   })
  //   //throw new Error('Method not implemented.');
  // }



  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        let idq = document.getElementById('Id')?.innerHTML;
        //console.log(this.route);
        console.log(id);
        console.log(idq);
        if(id) {
          console.log(id);
          this.bookService.getBook(id).subscribe({
            next: (resposne) => {
              this.bookDetails = Object.values(resposne)[0] as BookInfo;
            }
          })
        }
      }
    })
  }
}

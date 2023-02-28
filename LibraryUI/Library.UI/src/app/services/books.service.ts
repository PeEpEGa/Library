import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Book, BookInfo, NewBook } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get(this.apiUrl + '/Library/GetAllBooks');
  }

  addBook(addBookRequest: NewBook): Observable<NewBook> {
    addBookRequest.id = 0;
    addBookRequest.cover = 'q';
    return this.http.put<NewBook>(this.apiUrl + '/Library/CreateBook', addBookRequest);
  }

  // getBook(id: string): Observable<NewBook> {
  //   return this.http.get<NewBook>(this.apiUrl + '/Library/(BookInfo)?id=' + id);
  // }
  getBook(id: string): Observable<BookInfo> {
    return this.http.get<BookInfo>(this.apiUrl + '/Library/BookInfo?id=' + id);
  }

  updateBook(updateBookRequest: NewBook): Observable<NewBook> {
    return this.http.put<NewBook>(this.apiUrl + '/Library/CreateBook', updateBookRequest);
  }

  deleteBook(id: string): Observable<NewBook> {
    return this.http.delete<NewBook>(this.apiUrl + '/Library/DeleteBook?id=' + id + '&secretKey=qwerty');
  }
}

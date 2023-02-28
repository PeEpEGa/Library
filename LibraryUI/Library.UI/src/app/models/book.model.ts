export interface Book {
  id: number,
  title: string;
  rating: number;
  reviewsNumber: number;
}

export interface NewBook {
  id: number;
  title: string;
  cover: string;
  content: string;
  author: string;
  genre: string;
}

export interface BookInfo {
  id: number;
  title: string;
  author: string;
  cover: string;
  content: string;
  genre: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  message: string;
  bookID: number;
  reviewer: string;
}

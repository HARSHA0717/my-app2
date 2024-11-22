import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books:any=[];

  constructor(private _bookService:BookService){
    _bookService.getbooks().subscribe(
      (data:any)=>{
        this.books = data;

      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}

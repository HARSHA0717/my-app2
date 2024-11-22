import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
  imdbs:any=[];

  constructor(private _imdbsService:ImdbService){
    _imdbsService.getimdbs().subscribe(
      (data:any) => {
        this.imdbs = data;
      },
      (err:any)=>{
        alert('internal server down');
      }
    );
      
  }

  Math=Math;
}

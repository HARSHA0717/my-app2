import { Component, Input } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  @Input() rating:number = 0;
  products: any=[];
  constructor(private _amazonService:AmazonService){
    _amazonService.getproducts().subscribe(
      (data:any)=>{
        this.products = data;
        (err:any)=>{
          alert('internal server error');
        }
    }
  )
}


}

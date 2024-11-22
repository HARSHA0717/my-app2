import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  Radius:number=0;
  Result:number=0;

  area(){
    this.Result= 3.14*(this.Radius*this.Radius)

  }
  perimeter(){
    this.Result= 2*3.14*this.Radius

  }
  }



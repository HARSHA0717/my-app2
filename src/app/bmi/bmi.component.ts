import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  Weight: number=0;
  Height: number=0;
  Result: number=0;

  Calculate(){
    this.Result = this.Weight / ((this.Height/100) * (this.Height/100));
  }
 

}

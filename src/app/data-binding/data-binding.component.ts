import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age:number=20;
  name:string="abc";
  isIndian:boolean=true;

  isInvalid:boolean=false;

  phone:string="+91"

  create(){
    alert("created successfully!!!");
  }

  typing(){
    alert("typing")
  }

  // ==========
  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
  }
}

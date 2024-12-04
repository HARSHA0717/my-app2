import { Text } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  text:string=''; 

//  @Input() a:number=0;
@Input() max:number = 50;

 @Output() bEvent:EventEmitter<number>= new EventEmitter();

//  send(){
//   this.bEvent.emit(20);
//  }

input:EventEmitter<number>= new EventEmitter();

oninput(){
  if(this.text.length>this.max){
    this.text = this.text.substring(0,this.max);
  }
}

}

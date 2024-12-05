import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  name:string[]= ['a','b','c'];
  user:User={
    name: 'a',
    age: 30,
    id:221,
    address: {
      city: 'hyd',
      pin: 50000,
    },
    phone: 9000,
   
  }

}

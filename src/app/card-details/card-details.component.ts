import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  student:any={};

  constructor(private _activatedRoute:ActivatedRoute,private _studentService:StudentService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);

        _studentService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.student= data;
          }
        )
      }
    )
  }

}

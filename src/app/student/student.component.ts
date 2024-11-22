import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students:any=[];


  constructor(private _studentService:StudentService){
    _studentService.getstudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (error:any)=>{
        console.log(error);
      }
    )


  
  
}
}

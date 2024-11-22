import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students:any=[];
  term:string="";
  column:string="";
  order:string="";
  id:string="";


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

filter(){
  this._studentService.getfilterstudents(this.term).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert('internal server error');
    }
  )
}

sort(){
  this._studentService.getsortedstudents(this.column,this.order).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert('internal server error');
    }
  )
}
delete(id:string){
  this._studentService.deleteStudent(id).subscribe(
    (data:any)=>{
      alert("deleted succesfully!!");
      location.reload();
    },
    (err:any)=>{
      alert('internal server error');
    }
  )
}






}

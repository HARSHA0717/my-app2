import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private _studentService:StudentService){}


  public StudentForm:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      email: new FormControl(),
      profile_picture: new FormControl(),
    }
  );

  submit(){
    console.log(this.StudentForm);
    this._studentService.createStudent(this.StudentForm.value).subscribe(
      (data:any)=>{
        alert('Student created successfully');
      },
      (err:any)=>{
        alert('Creation failed');
      }
    )
  }

}

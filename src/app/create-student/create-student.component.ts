import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  id:string="";

  constructor(private _studentService:StudentService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;

        _studentService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.StudentForm.patchValue(data);
          }
        )
      }
    )
  }


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

    if(this.id){
      this._studentService.updatestudent(this.id,this.StudentForm.value).subscribe(
        (data:any)=>{
          alert('Student updated successfully');
        },
        (err:any)=>{
          alert('Update failed');
        }
      )
    }
    else{
     
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

}

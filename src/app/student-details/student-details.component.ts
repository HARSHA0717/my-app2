import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    class: new FormControl(),
    fathername: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.max(6)])
    }),


    marks: new FormArray([]),

    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl()


    

  })

  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{

        if(data=='dayscholor'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee')
        }
        else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee')
        }

      }
    )
  }

  get marksFormArray(){
    return this.userForm.get('marks') as FormArray;
  }

  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)])
      })
    )

   
    }
    deletemark(i:number){
      this.marksFormArray.removeAt(i);

  }


  

  submit(){
    console.log(this.userForm);
  }

}

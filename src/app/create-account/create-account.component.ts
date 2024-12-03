import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  id:string="";

  constructor(private _accountsService:AccountsService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id = data.id;      
        _accountsService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.accountsForm.patchValue(data);
          }
        )
      }
    )
  }


  public accountsForm:FormGroup = new FormGroup(
    {
      account_name:new FormControl(),
      account_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl(),

    }
  )

  submit(){

    if(this.id){
      this._accountsService.updateAccount(this.id,this.accountsForm.value).subscribe(
        (data:any)=>{
          alert("updated sucesfully");
        },
        (err:any)=>{
          alert("update failed");
        }
      )
    }
      else{
        this._accountsService.createAccounts(this.accountsForm.value).subscribe(
          (data:any)=>{
            alert("created succesfully");
          },
          (err:any)=>{
            alert("creation failed");
          }
        )
      }

    }
   
    
  }

// }

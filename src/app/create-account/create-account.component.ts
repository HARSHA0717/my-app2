import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private _accountsService:AccountsService){}


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
    console.log(this.accountsForm);
    this._accountsService.createAccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        alert('account created successfully');
      },
      (err:any)=>{
        alert('creation failed');
      }
    )
    
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  account:any="";

  constructor(private _activatedRoute:ActivatedRoute,private _accountService:AccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
      }
    )
  }

}

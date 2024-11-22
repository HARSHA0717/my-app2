import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts: any=[];
  term:string="";

  column:string="";
  order:string="";

  page:number=0;
  limit:number=0;

  id:string="";



  constructor(private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
        (err:any)=>{
          alert('internal server error');
        }
      }

    )
  }

  filter(){
    this._accountsService.getFilterAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }

  sorted(){
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }


  pagination(){
    this._accountsService.getPaginatedAccounts(this.page,this.limit).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }

  delete(id:string){
    this._accountsService.deleteAccounts(id).subscribe(
      (data:any)=>{
      alert('deleted successfully!!');
      location.reload();
      },
      (err:any)=>{
        alert('internal server error');
      }
    )

  }


 
 





























}

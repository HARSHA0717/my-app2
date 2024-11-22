import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {


  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any> {
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');

  }


  getFilterAccounts(term:string){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term);
  }

  getSortedAccounts(column:string,order:string){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+'&order='+order);

  }

  getPaginatedAccounts(page:number, limit:number){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?page='+page+'&limit='+limit);
  }

  createAccounts(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals', data);
  }

  deleteAccounts(id:string):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }























}

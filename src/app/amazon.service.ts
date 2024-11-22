import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _httpClientService:HttpClient) { }
  getproducts():Observable<any>{
    return this._httpClientService.get('https://fakestoreapi.com/products');
  }
}

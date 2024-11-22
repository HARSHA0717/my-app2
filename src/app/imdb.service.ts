import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private _httpClient:HttpClient) { }
  getimdbs():Observable<any>{
    return this._httpClient.get('https://dummyapi.online/api/movies');
  }
}

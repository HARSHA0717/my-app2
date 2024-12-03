import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/student';

  constructor(private _httpClient:HttpClient) { }
  getstudents():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getstudent(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'/'+id);
  }

  updatestudent(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+'/'+id,data);
  }
  
  getfilterstudents(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?filter='+term);
  }

  getsortedstudents(column:string , order: string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?sortBy='+column+'&order='+order);
  }

  createStudent(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }


  deleteStudent(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/'+id);
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  urlRegister:string = 'http://localhost:4201/register';
  url:string = 'http://localhost:4201/login';

  registerUser(user:any) {
    return this.http.post(this.urlRegister, user)
  }

  getUser(id:number){
    return this.http.get(this.url+'/'+id)

  }


}

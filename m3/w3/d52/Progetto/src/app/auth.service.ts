import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  url:string = 'http://localhost:4201/login';

  login(user:any) {
    return this.http.post(this.url, user);
  }

  logUser(token:string){
    localStorage.setItem('token', token);
    this.router.navigate(['/home'])

  }

  logout():boolean{
    localStorage.removeItem('token');
    return true;
  }

  isUserLogged(){
    return localStorage.getItem('token') != null
  }
}

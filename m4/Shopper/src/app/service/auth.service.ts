import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogIn, ISignUp, ISignUpResponse } from '../interface-class/iauthdata';
import { User } from '../interface-class/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrlRegister: string = 'http://localhost:4201/register';
  apiUrlLogin: string = 'http://localhost:4201/login';
  tokenItemKey: string = 'token';
  userInfoKey: string = 'loggedUser';

  constructor(private http: HttpClient, private route: Router) {}

  login(user: ILogIn) {
    return this.http.post<ISignUpResponse>(this.apiUrlLogin, user);
  }

  registerUser(user: ISignUp) {
    return this.http.post<ISignUpResponse>(this.apiUrlRegister, user);
  }

  logUser(token: string) {
    localStorage.setItem('token', token);
    this.route.navigate(['/account']);
  }

  logout() {
    localStorage.removeItem(this.tokenItemKey);
    localStorage.removeItem(this.userInfoKey);
    this.route.navigate(['/']);
  }

  isUserLogged(): boolean {
    return localStorage.getItem(this.tokenItemKey) != null;
  }
  
  saveLoggedUser(user: User) {
    localStorage.setItem(this.userInfoKey, JSON.stringify(user));
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem(this.userInfoKey) || '{}');
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenItemKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenItemKey) || '';
  }

  // getUser(id:number){
  //   return this.http.get(this.apiUrl+'/'+id)
  // }
}

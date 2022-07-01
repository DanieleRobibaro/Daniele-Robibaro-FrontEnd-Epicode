import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface-class/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  apiUrl = 'http://localhost:4201/users';



  updateAddress(id: number, user: User) {
    return this.http.patch<User>(this.apiUrl + '/' + id, user);
  }

 
}

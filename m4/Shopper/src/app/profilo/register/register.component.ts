import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp, ISignUpResponse } from 'src/app/interface-class/iauthdata';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';

import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  user:User = new User

  goRegister(){
    this.authService.registerUser(this.user).subscribe(
      (data:ISignUpResponse) => {
        console.log(data);
      })
      // this.user = {
      //   firstname: '',
      //   lastname: '',
      //   email: '',
      //   password: '',
      //   address:{}
      // }
      this.router.navigate(['/account'])
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  user = {
    email: 'admin@admin.it',
    password: 'password'
  }

  login(){
    this.authService.login(this.user).subscribe((res:any) => {
      console.log(res);
      this.authService.logUser(res.accessToken)
    })
  }

}

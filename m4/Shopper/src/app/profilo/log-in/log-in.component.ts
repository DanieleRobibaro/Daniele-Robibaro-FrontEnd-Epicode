import { Component, OnInit } from '@angular/core';
import { ILogIn, ISignUpResponse } from 'src/app/interface-class/iauthdata';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  user:ILogIn = {
    email: '',
    password: ''
    
  }

  goLogin(){
    this.authService.login(this.user).subscribe(
      (res:ISignUpResponse) => {
        console.log(res);
        this.authService.logUser(res.accessToken);
        this.authService.saveLoggedUser(res.user)
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ILogIn, ISignUpResponse } from 'src/app/interface-class/iauthdata';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
  }


  user:ILogIn = {
    email: 'admin@admin.it',
    password: 'password'
    
  }

  goLogin(){
    this.authService.login(this.user).subscribe(
      (res:ISignUpResponse) => {
        console.log(res);
        this.authService.logUser(res.accessToken);
        this.authService.saveLoggedUser(res.user)
      }
    )
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Logged in successfully'
    })
  }
}

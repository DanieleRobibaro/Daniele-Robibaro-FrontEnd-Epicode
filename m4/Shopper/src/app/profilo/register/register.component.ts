import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUpResponse } from 'src/app/interface-class/iauthdata';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
  }

  user:User = new User

  goRegister(){
    this.authService.registerUser(this.user).subscribe(
      (data:ISignUpResponse) => {
        console.log(data);
      })
     Swal.fire('Success!', 'Your registration was successful.', 'success').then(
          (result) => {
            if (result) {
              this.router.navigate(['/account']);
            }
          }
        );
  }

}

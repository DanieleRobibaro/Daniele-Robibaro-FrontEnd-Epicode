import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUpResponse } from 'src/app/interface-class/iauthdata';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  user = this.authService.getLoggedUser();

  editUser(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.updateAddress(this.user.id,this.user).subscribe(
          (res) => {
            console.log(res);
            this.authService.saveLoggedUser(res)
        });
        Swal.fire('Edited!', 'Your file has been edited.', 'success').then(
          (result) => {
            if (result) {
              this.router.navigate(['/account']);
            }
          }
        );
      }
    });
    // this.usersService.updateAddress(this.user.id,this.user).subscribe((res)=>{
    //   console.log(res);
    // })
    // this.router.navigate(['/account'])
  }

}

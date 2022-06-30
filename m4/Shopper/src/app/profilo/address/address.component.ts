import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {
  }
  user = this.authService.getLoggedUser();

  

  editUser(){
    this.usersService.updateAddress(this.user.id,this.user).subscribe((res)=>{
      console.log(res);
    })
  }

}

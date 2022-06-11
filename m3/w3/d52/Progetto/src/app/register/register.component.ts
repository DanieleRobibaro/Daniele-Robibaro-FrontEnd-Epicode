import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  user = {
    email: '',
    password: ''
  }

  register() {
    this.userService.registerUser(this.user).subscribe(data =>{
      console.log(data)
    })
    this.user = {
      email: '',
      password: ''
    }
    this.router.navigate(['/login'])

  }

}

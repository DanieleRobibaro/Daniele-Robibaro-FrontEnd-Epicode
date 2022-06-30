import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  logout(){
      this.authService.logout();

      this.router.navigate(['/'])
    }
    
    user:User = this.authService.getLoggedUser();
}

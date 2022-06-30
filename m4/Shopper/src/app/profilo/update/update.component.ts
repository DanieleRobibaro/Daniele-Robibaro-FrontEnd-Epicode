import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  user:User = this.authService.getLoggedUser();
}

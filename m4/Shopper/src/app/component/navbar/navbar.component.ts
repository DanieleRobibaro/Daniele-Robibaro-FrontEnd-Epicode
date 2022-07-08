import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth.service';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalRef:NgbActiveModal | null = null;

  constructor(private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  isCollapsed = true;

  isUserLogged(){
    return this.authService.isUserLogged();
  }
  open(){
    this.modalRef = this.modalService.open(ModalCartComponent);
  }
}



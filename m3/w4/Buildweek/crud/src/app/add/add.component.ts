import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private router: Router, private operations: OperationsService) {}

  ngOnInit(): void {}

  data = {
    title: '',
    body: '',
  };

  addPost() {
    this.operations.createPost(this.data).subscribe({
      next: (res) => console.log(res),
    });
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}

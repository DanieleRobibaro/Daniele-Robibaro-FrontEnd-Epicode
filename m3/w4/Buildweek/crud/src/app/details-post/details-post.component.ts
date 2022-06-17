import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OperationsService } from '../operations.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
})
export class DetailsPostComponent implements OnInit {
  constructor(
    private operations: OperationsService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  data = {
    title: '',
    body: '',
    id: '',
  };

  // isLoading = false;
  // toggleLoading = () => {
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 3000);
  // };

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = +p['id'];
      this.getPost(id);
    });
  }

  getPost(id: number) {
    this.spinner.show();
    this.operations.getPost(id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
        this.spinner.hide();
      },
    });
  }

  detailsPost() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const newPost = {
          id: this.data.id,
          title: this.data.title,
          body: this.data.body,
        };
        this.operations.updatePost(newPost.id, newPost).subscribe({
          next: (res) => {
            console.log(res);
          },
        });
        Swal.fire('Edited!', 'Your file has been edited.', 'success').then(
          (result) => {
            if (result) {
              this.router.navigate(['/']);
            }
          }
        );
      }
    });
  }

  deletePost() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.operations.deletePost(this.data.id).subscribe({
          next: (res) => {
            console.log(res);
          },
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success').then(
          (result) => {
            if (result) {
              this.router.navigate(['/']);
            }
          }
        );
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Blueprint } from '../model/blueprint.model';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  data = {
    title: '',
    body: '',
    id: '',
  };

  num: string = '';

  ngOnInit(): void {}

  getPost(id: number) {
    this.operations.getPost(id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
    });
  }

  detailsPost() {
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
  }
}

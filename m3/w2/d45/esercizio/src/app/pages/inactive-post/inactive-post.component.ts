import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  constructor() {
    getPosts()
    .then(res => {
      this.posts = res.filter((post:Post )=> !post.active);
    })
   }

  ngOnInit(): void {
  }

}

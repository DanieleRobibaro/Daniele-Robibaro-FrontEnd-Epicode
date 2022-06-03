import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  posts!:Post[]


  constructor() {
    fetch("../../assets/db.json")
    .then(res => res.json())
    .then(res => {
      this.posts = res.filter((post:Post) => {
        return post.active
      });
    })
   }

  ngOnInit(): void {
  }

}

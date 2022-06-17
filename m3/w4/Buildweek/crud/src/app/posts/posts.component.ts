import { Component, OnInit } from '@angular/core';
import { Blueprint } from '../model/blueprint.model';
import { OperationsService } from '../operations.service';
import { NgxSpinnerService } from 'ngx-spinner';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private operations: OperationsService,
    private spinner: NgxSpinnerService
  ) {}

  page = 5;
  pageSize = 5;
  posts: Blueprint[] = [];
  filteredPosts: Blueprint[] = [];
  searchText = '';

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.spinner.show();
    this.operations.getAll().subscribe((res) => {
      this.posts = res;
      this.spinner.hide();
      this.search();
    });
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    if (this.searchText == '') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter((e) => {
        return e.title?.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
    // this.filteredPosts =
    //   this.searchText == ''
    //     ? this.posts
    //     : this.posts.filter((element?: any) => {
    //         console.log(
    //           element,
    //           this.searchText,
    //           element.title.toLowerCase == this.searchText.toLowerCase
    //         );
    //         return element.title.toLowerCase() == this.searchText.toLowerCase();
    //       });
  }
}

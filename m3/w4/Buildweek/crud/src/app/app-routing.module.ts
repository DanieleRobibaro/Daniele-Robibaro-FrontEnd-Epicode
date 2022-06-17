import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'details-post/:id',
    component: DetailsPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

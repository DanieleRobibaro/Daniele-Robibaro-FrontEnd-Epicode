import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent
  },
  {
    path: 'shop/all', 
    loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('../stores/stores.module').then(m => m.StoresModule)
  }
  ];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

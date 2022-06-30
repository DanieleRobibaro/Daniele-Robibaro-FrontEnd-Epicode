import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/auth/guard.guard';
import { AccountComponent } from './account.component';


const routes: Routes = [
  {
    path: '', 
    canActivate: [GuardGuard],
    component: AccountComponent
  },
  {
    path: 'log-in',
    loadChildren: () => import('../log-in/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'orders',
    canActivate: [GuardGuard],
    loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'update',
    canActivate: [GuardGuard],
    loadChildren: () => import('../update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'address',
    canActivate: [GuardGuard],
    loadChildren: () => import('../address/address.module').then(m => m.AddressModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

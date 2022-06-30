import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out.component';

const routes: Routes = [
  {
  path: '', component: CheckOutComponent
  },
  { 
    path: 'shipping', 
    loadChildren: () => import('../shipping/shipping.module').then(m => m.ShippingModule)
  },
  { 
    path: 'payment', 
    loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOutRoutingModule { }

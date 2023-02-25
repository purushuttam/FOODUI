import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';

import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'',
    component:PaymentComponent
  }
]

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }

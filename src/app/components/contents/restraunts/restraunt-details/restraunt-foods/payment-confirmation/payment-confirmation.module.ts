import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentConfirmationComponent } from './payment-confirmation.component';

var routes:Routes = [
  {
    path:'',
    component:PaymentConfirmationComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentConfirmationModule { }

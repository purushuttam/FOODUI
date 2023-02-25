import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';

import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'',
    component:OrderConfirmationComponent
  }
]


@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderConfirmationModule { }

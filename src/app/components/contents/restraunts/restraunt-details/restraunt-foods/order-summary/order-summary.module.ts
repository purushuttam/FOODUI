import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';

import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'',
    component:OrderSummaryComponent
  }
]

@NgModule({
  declarations: [
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderSummaryModule { }

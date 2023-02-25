import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateOrderComponent } from './update-order.component';
import { Router, RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:UpdateOrderComponent
  }
]

@NgModule({
  declarations: [
    UpdateOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateOrderModule { }

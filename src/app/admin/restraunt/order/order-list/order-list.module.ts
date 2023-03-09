import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

var routes:Routes = [
  {
    path:'',
    component: OrderListComponent
  }
]

@NgModule({
  declarations: [
    OrderListComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderListModule { }

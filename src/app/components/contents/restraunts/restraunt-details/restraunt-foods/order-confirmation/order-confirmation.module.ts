import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';

import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Listbox } from 'primeng/listbox';
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
    PanelModule,
    TableModule,
    ButtonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderConfirmationModule { }

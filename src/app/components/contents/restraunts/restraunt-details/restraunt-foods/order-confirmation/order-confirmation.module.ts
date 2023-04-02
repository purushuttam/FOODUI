import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { SkeletonModule } from 'primeng/skeleton';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Listbox } from 'primeng/listbox';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
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
  providers:[MessageService],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    ButtonModule,
    CardModule,
    SkeletonModule,
    ToastModule,
    ProgressBarModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderConfirmationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

var routes:Routes = [
  {
    path:'',
    component:FoodListComponent
  }
]

@NgModule({
  declarations: [
    FoodListComponent
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
export class FoodListModule { }

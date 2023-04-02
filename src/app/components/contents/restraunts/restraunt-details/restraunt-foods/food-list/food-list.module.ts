import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';


import { SkeletonModule } from 'primeng/skeleton';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

var routes: Routes =  [
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
    CardModule,
    ButtonModule,
    ImageModule,
    ToastModule,
    SkeletonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodListModule { }

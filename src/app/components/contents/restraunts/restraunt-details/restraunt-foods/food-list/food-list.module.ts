import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';


import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

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
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ImageModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodListModule { }

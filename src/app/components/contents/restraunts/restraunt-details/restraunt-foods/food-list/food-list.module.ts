import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';


import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class FoodListModule { }

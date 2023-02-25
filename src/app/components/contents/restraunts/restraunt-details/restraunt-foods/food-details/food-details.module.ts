import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from './food-details.component';


import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'',
    component:FoodDetailsComponent
  }
]

@NgModule({
  declarations: [
    FoodDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodDetailsModule { }

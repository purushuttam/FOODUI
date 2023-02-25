import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:AddFoodComponent
  }
]

@NgModule({
  declarations: [
    AddFoodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddFoodModule { }

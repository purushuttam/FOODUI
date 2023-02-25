import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFoodComponent } from './update-food.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:UpdateFoodComponent
  }
]

@NgModule({
  declarations: [
    UpdateFoodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateFoodModule { }

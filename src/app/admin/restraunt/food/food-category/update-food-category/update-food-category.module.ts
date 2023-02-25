import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFoodCategoryComponent } from './update-food-category.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:UpdateFoodCategoryComponent
  }
]

@NgModule({
  declarations: [
    UpdateFoodCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateFoodCategoryModule { }

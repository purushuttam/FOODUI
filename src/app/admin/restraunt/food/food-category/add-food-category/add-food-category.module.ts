import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodCategoryComponent } from './add-food-category.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:AddFoodCategoryComponent
  }
]

@NgModule({
  declarations: [
    AddFoodCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddFoodCategoryModule { }

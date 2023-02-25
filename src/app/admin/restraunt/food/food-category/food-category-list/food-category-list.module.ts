import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoryListComponent } from './food-category-list.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {
    path:'',
    component:FoodCategoryListComponent
  }
]

@NgModule({
  declarations: [
    FoodCategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodCategoryListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoryRoutingModule } from './food-categor-routing.module';
import { FoodCategoryComponent } from './food-category.component';



@NgModule({
  declarations: [
    FoodCategoryComponent
  ],
  imports: [
    CommonModule,
    FoodCategoryRoutingModule
  ]
})
export class FoodCategoryModule { }

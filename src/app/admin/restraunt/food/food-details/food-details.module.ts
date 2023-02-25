import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from './food-details.component';
import { FoodDetailsRoutingModule } from './food-details-routing.module';



@NgModule({
  declarations: [
    FoodDetailsComponent
  ],
  imports: [
    CommonModule,
    FoodDetailsRoutingModule
  ]
})
export class FoodDetailsModule { }

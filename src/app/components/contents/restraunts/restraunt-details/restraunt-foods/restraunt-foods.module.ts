import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntFoodsComponent } from './restraunt-foods.component';
import { RestrauntFoodRoutingModule } from './restraunt-food-routing.module';



@NgModule({
  declarations: [
    RestrauntFoodsComponent
  ],
  imports: [
    CommonModule,
    RestrauntFoodRoutingModule
  ]
})
export class RestrauntFoodsModule { }

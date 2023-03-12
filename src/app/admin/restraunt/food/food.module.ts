import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { FoodRoutingModule } from './food-routing.module';
import {ScrollPanelModule} from 'primeng/scrollpanel';



@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    ScrollPanelModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }

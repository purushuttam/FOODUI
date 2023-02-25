import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntDetailsRoutingModule } from './restraunt-details-routing.module';
import { RestrauntFoodsComponent } from './restraunt-foods/restraunt-foods.component';
import { RestrauntDetailsComponent } from './restraunt-details.component';



@NgModule({
  declarations: [
    RestrauntDetailsComponent
  ],
  imports: [
    CommonModule,
    RestrauntDetailsRoutingModule
  ]
})
export class RestrauntDetailsModule { }

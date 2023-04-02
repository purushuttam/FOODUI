import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntFoodsComponent } from './restraunt-foods.component';
import { RestrauntFoodRoutingModule } from './restraunt-food-routing.module';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';



@NgModule({
  declarations: [
    RestrauntFoodsComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    CommonModule,
    RestrauntFoodRoutingModule
  ]
})
export class RestrauntFoodsModule { }

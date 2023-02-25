import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntComponent } from './restraunt.component';
import { RestrauntRoutingModule } from './restraunt-routing.module';



@NgModule({
  declarations: [
    RestrauntComponent
  ],
  imports: [
    CommonModule,
    RestrauntRoutingModule
  ]
})
export class RestrauntModule { }

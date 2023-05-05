import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntListComponent } from './restraunt-list/restraunt-list.component';
import { RestrauntDetailsComponent } from './restraunt-details/restraunt-details.component';
import { RestrauntRoutingModule } from './restraunts-routing.module';
import { RestrauntsComponent } from './restraunts.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RestrauntsComponent
  ],
  imports: [
    CommonModule,
    RestrauntRoutingModule
  ]
})
export class RestrauntsModule { }

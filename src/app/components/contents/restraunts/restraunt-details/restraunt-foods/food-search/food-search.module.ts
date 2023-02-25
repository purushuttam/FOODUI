import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSearchComponent } from './food-search.component';

import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'',
    component:FoodSearchComponent
  }
]


@NgModule({
  declarations: [
    FoodSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodSearchModule { }

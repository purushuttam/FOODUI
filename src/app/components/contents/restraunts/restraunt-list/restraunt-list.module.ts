import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { RestrauntListComponent } from './restraunt-list.component';

var routes: Routes = [
  {
    path:'',
    component:RestrauntListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestrauntListModule { }

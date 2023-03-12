import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';

var routes:Routes = [
  {
    path:'',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

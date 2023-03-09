import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoryListComponent } from './food-category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService, SortEvent } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
var routes:Routes = [
  {
    path:'',
    component:FoodCategoryListComponent
  }
]

@NgModule({
  declarations: [
    FoodCategoryListComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodCategoryListModule { }

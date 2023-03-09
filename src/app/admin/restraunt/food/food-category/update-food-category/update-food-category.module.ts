import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFoodCategoryComponent } from './update-food-category.component';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
var routes:Routes = [
  {
    path:'',
    component:UpdateFoodCategoryComponent
  }
]

@NgModule({
  declarations: [
    UpdateFoodCategoryComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateFoodCategoryModule { }

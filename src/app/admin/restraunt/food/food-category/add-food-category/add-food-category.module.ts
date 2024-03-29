import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodCategoryComponent } from './add-food-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, ɵBrowserAnimationBuilder } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';

var routes:Routes = [
  {
    path:'',
    component:AddFoodCategoryComponent
  }
]

@NgModule({
  declarations: [
    AddFoodCategoryComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    InputTextareaModule,
    CardModule,
    // EditorModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddFoodCategoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFoodComponent } from './update-food.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';

var routes:Routes = [
  {
    path:'',
    component:UpdateFoodComponent
  }
]

@NgModule({
  declarations: [
    UpdateFoodComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateFoodModule { }

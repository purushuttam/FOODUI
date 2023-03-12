import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
var routes:Routes = [
  {
    path:'',
    component:AddFoodComponent
  }
]

@NgModule({
  declarations: [
    AddFoodComponent
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
export class AddFoodModule { }

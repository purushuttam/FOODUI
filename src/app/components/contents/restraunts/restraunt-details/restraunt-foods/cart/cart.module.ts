import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';


import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

var routes: Routes = [
  {
    path:'',
    component:CartComponent
  }
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }

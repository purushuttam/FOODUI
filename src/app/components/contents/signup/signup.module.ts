import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
var routes: Routes = [
  {
    path:'',
    component:SignupComponent
  }
]


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }

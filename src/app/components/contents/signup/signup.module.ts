import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {InputTextModule} from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';

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
    ReactiveFormsModule,
    PanelModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }

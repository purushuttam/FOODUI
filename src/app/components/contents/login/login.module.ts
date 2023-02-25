import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InputTextModule } from 'primeng/inputtext';
var routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }

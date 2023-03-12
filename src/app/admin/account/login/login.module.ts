import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';

var routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }

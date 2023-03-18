import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

var routes: Routes = [
  {
    path:'',
    component:SignupComponent
  }
]

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }

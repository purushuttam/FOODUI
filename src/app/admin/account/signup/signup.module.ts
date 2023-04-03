import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
  providers:[MessageService],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }

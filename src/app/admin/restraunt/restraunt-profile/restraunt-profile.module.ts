import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestrauntProfileComponent } from './restraunt-profile.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import {StepsModule} from 'primeng/steps';
import { CartModule } from 'src/app/components/contents/restraunts/restraunt-details/restraunt-foods/cart/cart.module';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
var routes:Routes = [
  {
    path:'',
    component:RestrauntProfileComponent
  }
]

@NgModule({
  declarations: [RestrauntProfileComponent],
  providers:[MessageService],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    StepsModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ]
})
export class RestrauntProfileModule { }

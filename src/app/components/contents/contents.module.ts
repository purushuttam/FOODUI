import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntsComponent } from './restraunts/restraunts.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContentRoutingModule } from './content-routing.module';
import { Footer } from 'primeng/api';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentsComponent } from './contents.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ContentRoutingModule
  ]
})
export class ContentsModule { }

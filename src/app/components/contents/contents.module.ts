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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentsModule { }

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
import { AvatarModule } from 'primeng/avatar';
import { ProfileComponent } from './profile/profile.component';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    ContextMenuModule,
    SplitterModule,
    PanelMenuModule,
    ContentRoutingModule
  ]
})
export class ContentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestrauntListComponent } from './restraunt-list.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {ImageModule} from 'primeng/image';
var routes: Routes = [
  {
    path:'',
    component:RestrauntListComponent
  }
]

@NgModule({
  declarations: [RestrauntListComponent],
  imports: [
    CommonModule,
    CardModule,
    ScrollPanelModule,
    MenuModule,
    SlideMenuModule,
    SidebarModule,
    ButtonModule,
    SplitterModule,
    PanelMenuModule,
    CardModule,
    DialogModule,
    MenubarModule,
    ImageModule,
    RouterModule.forChild(routes)
  ]
})
export class RestrauntListModule { }

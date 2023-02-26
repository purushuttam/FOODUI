import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntComponent } from './restraunt.component';
import { RestrauntRoutingModule } from './restraunt-routing.module';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SidebarModule } from 'primeng/sidebar';
import { SideNavComponent } from '../side-nav/side-nav.component';


@NgModule({
  declarations: [
    RestrauntComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SlideMenuModule,
    SidebarModule,
    ButtonModule,
    RestrauntRoutingModule
  ]
})
export class RestrauntModule { }

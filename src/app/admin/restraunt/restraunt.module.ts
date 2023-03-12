import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrauntComponent } from './restraunt.component';
import { RestrauntRoutingModule } from './restraunt-routing.module';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SidebarModule } from 'primeng/sidebar';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { RestrauntProfileComponent } from './restraunt-profile/restraunt-profile.component';
import {SplitterModule} from 'primeng/splitter';
import {PanelMenuModule} from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    RestrauntComponent,
    SideNavComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    ScrollPanelModule,
    MenuModule,
    SlideMenuModule,
    SidebarModule,
    ButtonModule,
    SplitterModule,
    PanelMenuModule,
    CardModule,
    RestrauntRoutingModule
  ]
})
export class RestrauntModule { }

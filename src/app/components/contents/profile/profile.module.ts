import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';

var routes:Routes = [
  {
    path:'',
    component:ProfileComponent
  }
]

@NgModule({
  declarations: [
    CustomerProfileComponent,
    OrdersHistoryComponent
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
    DialogModule,
    MenubarModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }

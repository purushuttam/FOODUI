import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAuthGuard } from '../Auth/customer-auth.guard';
import { ProfileComponent } from './profile.component';

var routes:Routes = [
  {
    path:'',
    component:ProfileComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('../profile/customer-profile/customer-profile.module').then(m => m.CustomerProfileModule)
      },
      {
        path:'orders-history',
        loadChildren: () => import('../profile/orders-history/order-hisyory.module').then(m => m.OrderHisyoryModule)
      }
    ]
  }
]

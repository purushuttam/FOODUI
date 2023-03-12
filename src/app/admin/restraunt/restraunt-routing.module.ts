import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrauntAuthGuard } from 'src/app/components/contents/Auth/restraunt-auth.guard';
import { RoleGuard } from 'src/app/components/contents/Auth/role.guard';
import { RestrauntComponent } from './restraunt.component';

var routes: Routes = [
  {
    path: '',
    component: RestrauntComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('../restraunt/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'food',
        loadChildren: () =>
          import('../restraunt/food/food.module').then((m) => m.FoodModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../restraunt/report/report.module').then(
            (m) => m.ReportModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./restraunt-profile/restraunt-profile.module').then(
            (m) => m.RestrauntProfileModule
          ),
      },
    ],
    canActivate: [RestrauntAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestrauntRoutingModule {}

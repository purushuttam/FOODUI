
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {
    path:'d',
    loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path:'restraunt',
    loadChildren: () => import('../admin/restraunt/restraunt.module').then(m => m.RestrauntModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}

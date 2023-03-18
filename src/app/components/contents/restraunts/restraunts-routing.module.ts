import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrauntListComponent } from './restraunt-list/restraunt-list.component';

const routes: Routes = [
  {
    path:'details',
    loadChildren: () => import('../restraunts/restraunt-details/restraunt-details.module').then(m => m.RestrauntDetailsModule)
  },
  {
    path:'list',
    loadChildren: () => import('../restraunts/restraunt-list/restraunt-list.module').then(m => m.RestrauntListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestrauntRoutingModule{}

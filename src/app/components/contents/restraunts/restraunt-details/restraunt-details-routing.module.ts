import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrauntFoodsComponent } from './restraunt-foods/restraunt-foods.component';

const routes: Routes = [
  // {
  //   path:'',
  //   loadChildren :() => import('../restraunt-details/restraunt-details.module').then(m => m.RestrauntDetailsModule)
  // },
  {
    path:'restraunt-food',
    loadChildren:() => import('../restraunt-details/restraunt-foods/restraunt-foods.module').then(m => m.RestrauntFoodsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestrauntDetailsRoutingModule{}

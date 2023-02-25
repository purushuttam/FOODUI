import { NgModule } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";

var routes:Routes = [
  {
    path:'add',
    loadChildren: () => import('./add-food/add-food.module').then(m => m.AddFoodModule)
  },
  {
    path:'list',
    loadChildren: () => import('./food-list/food-list.module').then(m => m.FoodListModule)
  },
  {
    path:'update',
    loadChildren: () => import('./update-food/update-food.module').then(m => m.UpdateFoodModule)
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class FoodDetailsRoutingModule {}

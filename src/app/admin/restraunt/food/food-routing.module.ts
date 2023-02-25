import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

var routes:Routes = [
  {
    path:'food-category',
    loadChildren: () => import('./food-category/food-category.module').then(m => m.FoodCategoryModule)
  },
  {
    path:'food-details',
    loadChildren: () => import('./food-details/food-details.module').then(m => m.FoodDetailsModule)
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class FoodRoutingModule {}

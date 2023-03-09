import { Xliff } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ReportModule } from "../../report/report.module";

var routes:Routes = [
  {
    path:'',
    loadChildren: () => import('./food-category-list/food-category-list.module').then(m => m.FoodCategoryListModule)
  },
  {
    path:'add',
    loadChildren: () => import('./add-food-category/add-food-category.module').then(m => m.AddFoodCategoryModule)
  },
  {
    path:'list',
    loadChildren: () => import('./food-category-list/food-category-list.module').then(m => m.FoodCategoryListModule)
  },
  {
    path:'update/:id',
    loadChildren: () => import('./update-food-category/update-food-category.module').then(m => m.UpdateFoodCategoryModule)
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class FoodCategoryRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RestrauntComponent } from "./restraunt.component";

var routes: Routes = [
  {
    path:'',
    component:RestrauntComponent,
    children:[
      {
        path:'order',
        loadChildren: () => import('../restraunt/order/order.module').then(m => m.OrderModule)
      },
      {
        path:'food',
        loadChildren: () => import('../restraunt/food/food.module').then(m => m.FoodModule)
      },
      {
        path:'report',
        loadChildren: () => import('../restraunt/report/report.module').then(m => m.ReportModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestrauntRoutingModule {}

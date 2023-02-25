import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";


var routes: Routes = [
  {
    path:'list',
    loadChildren: () => import('./order-list/order-list.module').then(m => m.OrderListModule)
  },
  {
    path:'update',
    loadChildren: () => import('./update-order/update-order.module').then(m => m.UpdateOrderModule)
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class OrderRoutingModule {}

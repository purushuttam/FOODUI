import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  // {
  //   path:'',
  //   loadChildren: () => import('../restraunt-details.module').then(m => m.RestrauntDetailsModule)
  // },
  {
    path:'cart',
    loadChildren: () => import('../restraunt-foods/cart/cart.module').then(m => m.CartModule)
  },
  {
    path:'food-details',
    loadChildren: () => import('../restraunt-foods/food-details/food-details.module').then(m => m.FoodDetailsModule)
  },
  {
    path:'food-list',
    loadChildren: () => import('../restraunt-foods/food-list/food-list.module').then(m => m.FoodListModule)
  },
  {
    path:'food-search',
    loadChildren: () => import('../restraunt-foods/food-search/food-search.module').then(m => m.FoodSearchModule)
  },
  {
    path:'order-Confirmation',
    loadChildren: () => import('../restraunt-foods/order-confirmation/order-confirmation.module').then(m => m.OrderConfirmationModule)
  },
  {
    path:'order-list',
    loadChildren: () => import('../restraunt-foods/order-list/order-list.module').then(m => m.OrderListModule)
  },
  {
    path:'order-summary',
    loadChildren: () => import('../restraunt-foods/order-summary/order-summary.module').then(m => m.OrderSummaryModule)
  },
  {
    path:'payment',
    loadChildren: () => import('../restraunt-foods/payment/payment.module').then(m => m.PaymentModule)
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestrauntFoodRoutingModule {}

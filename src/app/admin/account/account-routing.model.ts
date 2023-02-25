import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

var routes: Routes = [
  {
    path:'',
    loadChildren: () => import('../account/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'login',
    loadChildren: () => import('../account/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'signup',
    loadChildren: () => import('../account/signup/signup.module').then(m => m.SignupModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule {}

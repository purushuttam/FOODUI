import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAuthGuard } from './Auth/customer-auth.guard';
import { ContentsComponent } from './contents.component';
import { RestrauntsComponent } from './restraunts/restraunts.component';

const routes: Routes = [
  {
    path:'',
    component:ContentsComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('../contents/restraunts/restraunts.module').then(m => m.RestrauntsModule)
      },
      {
        path:'signup',
        loadChildren: () => import('../contents/signup/signup.module').then(m => m.SignupModule)
      },
      {
        path:'login',
        loadChildren: () => import('../contents/login/login.module').then(m => m.LoginModule),
        canActivate:[CustomerAuthGuard]
      },
      {
        path:'profile',
        loadChildren: () => import('../contents/profile/profile.module').then(m => m.ProfileModule),
        canActivate:[CustomerAuthGuard]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule {}

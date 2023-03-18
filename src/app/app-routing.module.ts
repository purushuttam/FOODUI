import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentsComponent } from './components/contents/contents.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('../app/components/contents/contents.module').then(m => m.ContentsModule)
  },
  {
    path:'',
    loadChildren:() => import('../app/components/contents/contents.module').then(m => m.ContentsModule)
  },
  {
    path:'admin',
    loadChildren:() => import('../app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

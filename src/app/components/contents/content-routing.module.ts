import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrauntsComponent } from './restraunts/restraunts.component';

const routes: Routes = [
  {
    path:'',
    component:RestrauntsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ContentsComponent{}

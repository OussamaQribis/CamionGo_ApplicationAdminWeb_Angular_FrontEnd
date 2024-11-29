import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailDeProfileComponent } from './detail-de-profile.component';

const routes: Routes = [{path:'',component:DetailDeProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDeProfileRoutingModule { }

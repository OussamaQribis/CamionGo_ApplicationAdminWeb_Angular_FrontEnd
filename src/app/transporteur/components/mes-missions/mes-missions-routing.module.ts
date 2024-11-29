import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesMissionsComponent } from './mes-missions.component';

const routes: Routes = [{path:'',component:MesMissionsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesMissionsRoutingModule { }

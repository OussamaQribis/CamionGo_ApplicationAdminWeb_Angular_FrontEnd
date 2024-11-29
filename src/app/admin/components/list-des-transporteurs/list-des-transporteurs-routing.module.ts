import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDesTransporteursComponent } from './list-des-transporteurs.component';

const routes: Routes = [{ path: '', component: ListDesTransporteursComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDesTransporteursRoutingModule { }

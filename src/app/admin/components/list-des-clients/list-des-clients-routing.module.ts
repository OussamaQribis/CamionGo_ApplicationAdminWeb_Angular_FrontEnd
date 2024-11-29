import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDesClientsComponent } from './list-des-clients.component';

const routes: Routes = [{ path: '', component: ListDesClientsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDesClientsRoutingModule { }

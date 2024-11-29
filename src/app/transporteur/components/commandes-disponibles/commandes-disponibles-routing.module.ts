import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesDisponiblesComponent } from './commandes-disponibles.component';

const routes: Routes = [{path:'',component:CommandesDisponiblesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesDisponiblesRoutingModule { }

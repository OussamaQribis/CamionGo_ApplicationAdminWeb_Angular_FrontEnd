import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToutesLesCommandesComponent } from './toutes-les-commandes.component';

const routes: Routes = [{ path: '', component: ToutesLesCommandesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToutesLesCommandesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportsSurLesCommandesComponent } from './rapports-sur-les-commandes.component';

const routes: Routes = [{ path: '', component: RapportsSurLesCommandesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportsSurLesCommandesRoutingModule { }

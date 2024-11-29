import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from 'src/app/demo/components/auth/access/access.component';
import { AccueilComponent } from './accueil.component';

const routes: Routes = [{ path: '', component: AccueilComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesUtilisateurComponent } from './gestion-des-utilisateur.component';

const routes: Routes = [{path:'',component:GestionDesUtilisateurComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDesUtilisateurRoutingModule { }

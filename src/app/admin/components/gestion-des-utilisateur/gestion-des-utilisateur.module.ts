import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDesUtilisateurRoutingModule } from './gestion-des-utilisateur-routing.module';
import { GestionDesUtilisateurComponent } from './gestion-des-utilisateur.component';


@NgModule({
  declarations: [GestionDesUtilisateurComponent],
  imports: [
    CommonModule,
    GestionDesUtilisateurRoutingModule
  ]
})
export class GestionDesUtilisateurModule { }

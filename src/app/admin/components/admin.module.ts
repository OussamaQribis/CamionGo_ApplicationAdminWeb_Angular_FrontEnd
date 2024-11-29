import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


import { AccueilModule } from './accueil/accueil.module';
import { GestionDesUtilisateurModule } from './gestion-des-utilisateur/gestion-des-utilisateur.module';
import { ListDesClientsModule } from './list-des-clients/list-des-clients.module';
import { ListDesTransporteursModule } from './list-des-transporteurs/list-des-transporteurs.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RapportsSurLesCommandesModule } from './rapports-sur-les-commandes/rapports-sur-les-commandes.module';
import { StatistiqueModule } from './statistique/statistique.module';
import { ToutesLesCommandesModule } from './toutes-les-commandes/toutes-les-commandes.module';

@NgModule({
  providers: [
    AccueilModule,
    GestionDesUtilisateurModule,
    ListDesClientsModule,
    ListDesTransporteursModule,
    NotificationsModule,
    RapportsSurLesCommandesModule,
    StatistiqueModule,
    ToutesLesCommandesModule
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  
})
export class AdminModule { }

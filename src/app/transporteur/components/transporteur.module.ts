import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransporteurRoutingModule } from '../components/transporteur-routing.module';


import { AccueilModule } from './accueil/accueil.module';
import { DetailDeProfileModule } from './detail-de-profile/detail-de-profile.module';
import { MesMissionsModule } from './mes-missions/mes-missions.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  providers: [
    AccueilModule,
    DetailDeProfileModule,
    MesMissionsModule,
    NotificationsModule
  ],
  imports: [
    CommonModule,
    TransporteurRoutingModule,
    
  ],
})
export class TransporteurModule { }

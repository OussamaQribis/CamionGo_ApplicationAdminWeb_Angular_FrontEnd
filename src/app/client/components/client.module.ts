import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';


import { AccueilModule } from './accueil/accueil.module';
import { DetailDeProfileModule } from './detail-de-profile/detail-de-profile.module';
import { MesCommandesModule } from './mes-commandes/mes-commandes.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  providers: [
    AccueilModule,
    DetailDeProfileModule,
    MesCommandesModule,
    NotificationsModule
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
	
  ],
})
export class ClientModule { }

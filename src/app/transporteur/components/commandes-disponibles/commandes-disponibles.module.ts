import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesDisponiblesRoutingModule } from './commandes-disponibles-routing.module';
import { CommandesDisponiblesComponent } from './commandes-disponibles.component';


@NgModule({
  declarations: [CommandesDisponiblesComponent],
  imports: [
    CommonModule,
    CommandesDisponiblesRoutingModule
  ]
})
export class CommandesDisponiblesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesCommandesRoutingModule } from './mes-commandes-routing.module';
import { MesCommandesComponent } from './mes-commandes.component';


@NgModule({
  declarations: [MesCommandesComponent],
  imports: [
    CommonModule,
    MesCommandesRoutingModule
  ]
})
export class MesCommandesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportsSurLesCommandesRoutingModule } from './rapports-sur-les-commandes-routing.module';
import { RapportsSurLesCommandesComponent } from './rapports-sur-les-commandes.component';


@NgModule({
  declarations: [RapportsSurLesCommandesComponent],
  imports: [
    CommonModule,
    RapportsSurLesCommandesRoutingModule
  ]
})
export class RapportsSurLesCommandesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToutesLesCommandesRoutingModule } from './toutes-les-commandes-routing.module';
import { ToutesLesCommandesComponent } from './toutes-les-commandes.component';


@NgModule({
  declarations: [ToutesLesCommandesComponent],
  imports: [
    CommonModule,
    ToutesLesCommandesRoutingModule
  ]
})
export class ToutesLesCommandesModule { }

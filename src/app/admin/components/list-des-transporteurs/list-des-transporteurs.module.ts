import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDesTransporteursRoutingModule } from './list-des-transporteurs-routing.module';
import { ListDesTransporteursComponent } from './list-des-transporteurs.component';


@NgModule({
  declarations: [ListDesTransporteursComponent],
  imports: [
    CommonModule,
    ListDesTransporteursRoutingModule
  ]
})
export class ListDesTransporteursModule { }

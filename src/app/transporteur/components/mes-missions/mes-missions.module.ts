import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesMissionsRoutingModule } from './mes-missions-routing.module';
import { MesMissionsComponent } from './mes-missions.component';


@NgModule({
  declarations: [MesMissionsComponent],
  imports: [
    CommonModule,
    MesMissionsRoutingModule
  ]
})
export class MesMissionsModule { }

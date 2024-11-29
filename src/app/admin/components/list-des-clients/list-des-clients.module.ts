import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDesClientsRoutingModule } from './list-des-clients-routing.module';
import { ListDesClientsComponent } from './list-des-clients.component';


@NgModule({
  declarations: [ListDesClientsComponent],
  imports: [
    CommonModule,
    ListDesClientsRoutingModule
  ]
})
export class ListDesClientsModule { }

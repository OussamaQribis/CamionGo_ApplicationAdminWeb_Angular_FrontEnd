import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDeProfileRoutingModule } from './detail-de-profile-routing.module';
import { DetailDeProfileComponent } from './detail-de-profile.component';


@NgModule({
  declarations: [DetailDeProfileComponent],
  imports: [
    CommonModule,
    DetailDeProfileRoutingModule
  ]
})
export class DetailDeProfileModule { }

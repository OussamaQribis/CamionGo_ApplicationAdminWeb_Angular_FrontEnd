import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesCommandesRoutingModule } from './mes-commandes-routing.module';
import { MesCommandesComponent } from './mes-commandes.component';
import { PanelModule } from 'primeng/panel';
import { PanelsDemoRoutingModule } from 'src/app/demo/components/uikit/panels/panelsdemo-routing.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { RouterModule } from '@angular/router';
import { TryComponent } from './try.component';
import { PersonalComponent } from './personal.component';
import { SeatComponent } from 'src/app/demo/components/uikit/menus/seat.component';
import { PaymentComponent } from 'src/app/demo/components/uikit/menus/payment.component';


@NgModule({
  declarations: [MesCommandesComponent],
  imports: [
    CommonModule,
    MesCommandesRoutingModule,
    PanelModule,
    PanelsDemoRoutingModule,
		SplitButtonModule,
    SplitterModule,
    MenuModule, 
    TabMenuModule,
		StepsModule,
    RouterModule.forChild([
			{
				path: '', component: PersonalComponent, children: [
					{ path: '', redirectTo: 'personal', pathMatch: 'full' },
					{ path: 'personal', component: PersonalComponent },
					{ path: 'confirmation', component: TryComponent },
					{ path: 'seat', component: SeatComponent },
					{ path: 'payment', component: PaymentComponent }
				]
			}
		]),
  ]
})
export class MesCommandesModule { }

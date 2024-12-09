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
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [MesCommandesComponent],
  imports: [
    CommonModule,
    MesCommandesRoutingModule,
    TableModule,
	DialogModule,
	RippleModule,
	ButtonModule,
	ToastModule,
	ToolbarModule,
	ConfirmDialogModule,
	InputTextModule,
	InputTextareaModule,
	CommonModule,
	FileUploadModule,
	DropdownModule,
	TagModule,
	RadioButtonModule,
	RatingModule,
	InputTextModule,
	FormsModule,
	InputNumberModule,
  ]
})
export class MesCommandesModule { }

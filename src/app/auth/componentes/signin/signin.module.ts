import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    FormsModule,
    TooltipModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    ToastModule,
		RadioButtonModule,
  ]
})
export class SigninModule { }

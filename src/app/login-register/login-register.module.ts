import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCommonPageComponent } from './login-common-page/login-common-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LoginCommonPageComponent, RegisterPageComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginRegisterModule { }

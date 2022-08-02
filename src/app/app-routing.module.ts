import { DashboardComponent } from './login-register/dashboard/dashboard.component';
import { RegisterPageComponent } from './login-register/register-page/register-page.component';
import { LoginCommonPageComponent } from './login-register/login-common-page/login-common-page.component';
import { HomeComponent } from './betting-framework/menu-headeing/home/home.component';
import { NgModule } from '@angular/core';
import { AccountComponent } from './betting-framework/menu-headeing/account/account.component';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['dashboard']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToDashboardWithLogger = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>
  pipe(
    tap(() => console.info('it will be redirected')),
    redirectToDashboard
  );

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: 'account', component : AccountComponent },
  { path: 'dashboard', component : DashboardComponent,
    ...canActivate(redirectToDashboardWithLogger), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', data: { breadcrumb: 'login' }, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'Signin', data: { breadcrumb: 'Signin' }, loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificationRoutingModule { }

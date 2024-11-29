import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Accueil', data: { breadcrumb: 'Accueil' }, loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'DetailDeProfile', data: { breadcrumb: 'DetailDeProfile' }, loadChildren: () => import('./detail-de-profile/detail-de-profile.module').then(m => m.DetailDeProfileModule) },
  { path: 'MesCommandes', data: { breadcrumb: 'MesCommandes' }, loadChildren: () => import('./mes-commandes/mes-commandes.module').then(m => m.MesCommandesModule) },
  { path: 'Notifications', data: { breadcrumb: 'Notifications' }, loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

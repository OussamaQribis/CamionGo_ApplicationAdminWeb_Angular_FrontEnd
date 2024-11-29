import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Accueil', data: { breadcrumb: 'Accueil' }, loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'CommandesDisponible', data: { breadcrumb: 'CommandesDisponible' }, loadChildren: () => import('./commandes-disponibles/commandes-disponibles.module').then(m => m.CommandesDisponiblesModule) },
  { path: 'DetailDeProfile', data: { breadcrumb: 'DetailDeProfile' }, loadChildren: () => import('./detail-de-profile/detail-de-profile.module').then(m => m.DetailDeProfileModule) },
  { path: 'MesMissions', data: { breadcrumb: 'MesMissions' }, loadChildren: () => import('./mes-missions/mes-missions.module').then(m => m.MesMissionsModule) },
  { path: 'Notifications', data: { breadcrumb: 'Notifications' }, loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporteurRoutingModule { }

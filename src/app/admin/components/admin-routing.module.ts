import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Accueil', data: { breadcrumb: 'Accueil' }, loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'GetstionDesutilisateurs', data: { breadcrumb: 'GetstionDesutilisateurs' }, loadChildren: () => import('./gestion-des-utilisateur/gestion-des-utilisateur.module').then(m => m.GestionDesUtilisateurModule) },
  { path: 'ListDesClients', data: { breadcrumb: 'ListDesClients' }, loadChildren: () => import('./list-des-clients/list-des-clients.module').then(m => m.ListDesClientsModule) },
  { path: 'ListDesTransporteurs', data: { breadcrumb: 'ListDesTransporteurs' }, loadChildren: () => import('./list-des-transporteurs/list-des-transporteurs.module').then(m => m.ListDesTransporteursModule) },
  { path: 'Notifications', data: { breadcrumb: 'Notifications' }, loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'Raports', data: { breadcrumb: 'Raports' }, loadChildren: () => import('./rapports-sur-les-commandes/rapports-sur-les-commandes.module').then(m => m.RapportsSurLesCommandesModule) },
  { path: 'ToutesLesCommandes', data: { breadcrumb: 'ToutesLesCommandes' }, loadChildren: () => import('./toutes-les-commandes/toutes-les-commandes.module').then(m => m.ToutesLesCommandesModule) },
  { path: 'Statistique', data: { breadcrumb: 'Statistique' }, loadChildren: () => import('./statistique/statistique.module').then(m => m.StatistiqueModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

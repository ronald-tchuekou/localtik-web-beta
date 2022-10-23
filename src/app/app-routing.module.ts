import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cloud', pathMatch: 'full'},
  { path: 'cloud', loadChildren: () => import('./screens/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'folders', loadChildren: () => import('./screens/folders/folders.module').then(m => m.FoldersModule) },
  { path: 'establishments', loadChildren: () => import('./screens/establishments/establishments.module').then(m => m.EstablishmentsModule) },
  { path: 'settings', loadChildren: () => import('./screens/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        // pages
        {
            path: '',
            component: LandingComponent
        },
        {
            path: 'not-found',
            component: NotFoundComponent,
        },
        // apps
        {
          path: 'admin',
          loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        },
        {
          path: 'panel',
          loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule),
        },
        {
          path: 'tournament',
          loadChildren: () => import('./modules/tournament/tournament.module').then(m => m.TournamentModule),
        },
        // not found handling
        {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'not-found',
        },
      ],
    }
  ];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentInputComponent } from './components/tournament-input/tournament-input.component';
import { TournamentManagerComponent } from './components/tournament-manager/tournament-manager.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent,
  },
  {
    path: 'new',
    component: TournamentInputComponent,
  },
  {
    path: 'manage/:id',
    component: TournamentManagerComponent,
  },
  // not found handling
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }

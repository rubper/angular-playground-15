import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentInputComponent } from './components/tournament-input/tournament-input.component';
import { TournamentManagerComponent } from './components/tournament-manager/tournament-manager.component';


@NgModule({
  declarations: [
    TournamentsComponent,
    TournamentInputComponent,
    TournamentManagerComponent,
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ]
})
export class TournamentModule { }

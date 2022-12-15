import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'me',
    component: UserDataComponent,
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
export class PanelRoutingModule { }

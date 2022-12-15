import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminMenuComponent,
  },
  { 
    path: 'users',
    component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

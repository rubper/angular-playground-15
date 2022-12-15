import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/users/users.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    UsersComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

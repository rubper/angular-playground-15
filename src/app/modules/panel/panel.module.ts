import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserDataComponent } from './components/user-data/user-data.component';


@NgModule({
  declarations: [
    MainMenuComponent,
    UserDataComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // app modules
    AuthModule,
    CoreModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing/routing.module';
import {MaterialModule} from './material/material.module';
import {AuthModule} from './auth/auth.module';
import {ProductModule} from './product/product.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    AuthModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

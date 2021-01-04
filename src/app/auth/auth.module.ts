import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../material/material.module';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingModule} from '../routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AgmCoreModule} from '@agm/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwRN5-igI8X_dJ0BTcFSq_-AGfAUqPwAo',
    }),
    MDBBootstrapModule.forRoot(),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [AuthService]
})
export class AuthModule {
}

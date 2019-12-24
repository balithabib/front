import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../auth/auth.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}

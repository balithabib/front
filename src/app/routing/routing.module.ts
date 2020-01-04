import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/services/auth-guard.service';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {AuthComponent} from '../auth/auth.component';
import {ProductComponent} from '../product/product/product.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'dashboard', component: DashboardComponent},
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

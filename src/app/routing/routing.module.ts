import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {AuthComponent} from '../auth/auth.component';
import {ProductComponent} from '../product/product/product.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthGuard} from '../auth/services/auth-guard.service';
import {AddComponent} from '../admin/add/add.component';
import {UpdateComponent} from '../admin/update/update.component';
import {DeleteComponent} from '../admin/delete/delete.component';
import {StatisticsComponent} from '../admin/statistics/statistics.component';

const appRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'dashboard/:id', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'admin/add', canActivate: [AuthGuard], component: AddComponent},

  {path: 'admin/update', canActivate: [AuthGuard], component: UpdateComponent},
  {path: 'admin/delete', canActivate: [AuthGuard], component: DeleteComponent},
  {path: 'admin/statistics', canActivate: [AuthGuard], component: StatisticsComponent},
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

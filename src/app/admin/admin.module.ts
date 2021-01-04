import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [AddComponent, DeleteComponent, UpdateComponent, StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule {
}

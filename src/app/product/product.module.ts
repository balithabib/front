import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingModule} from '../routing/routing.module';
import {ProductComponent} from './product/product.component';
import {ProductService} from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
    declarations: [ProductComponent, ProductListComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        MaterialModule,
        RoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [ProductService]
})
export class ProductModule {
}

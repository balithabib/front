import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/services/product.service';
import {ProductPreview} from '../product/product/models/product-preview';
import {formatNumber} from '@angular/common';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any;
  displayedColumns: string[] = ['image', 'name', 'unit_price', 'amount', 'total_price', 'delete'];
  dataSource = null;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.selectedProducts.subscribe((products) => {
      this.products = products;
    });
    console.log(this.products);
    this.dataSource = new MatTableDataSource<ProductPreview>(this.products);
  }

  getTotalCost() {
    return String(
      this.products
        .map(product => Number(product.price.replace('€', '.')))
        .reduce((acc, value) => acc + value, 0))
      .replace('.', '€');
  }

  OnDelete(productId: number) {
    const id = this.getId(productId);
    this.products.splice(id, 1);
    this.dataSource = new MatTableDataSource<ProductPreview>(this.products);
  }

  OnAdd(productId) {
    const id = this.getId(productId);
    const stock = this.products[id].stock;
    const amount = this.products[id].amount;
    this.products[id].amount = amount < stock ? amount + 1 : stock;
  }

  OnSub(productId) {
    const id = this.getId(productId);
    const amount = this.products[id].amount;
    this.products[id].amount = amount > 0 ? amount - 1 : 0;
  }

  getId(productId) {
    return this.products.findIndex(product => product.id === productId);
  }
}

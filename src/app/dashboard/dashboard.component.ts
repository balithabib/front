import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/services/product.service';
import {ProductPreview} from '../product/product/models/product-preview';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: ProductPreview[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.selectedProducts.subscribe((products) => {
      this.products = products;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductPreview} from '../product/models/product-preview';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isAuth = false;
  products = [];
  styleCss: object = {'col-lg-3': true};
  selectedProducts = {};

  constructor(private productService: ProductService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
    console.log('init');

    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      error => console.log(error)
    );

    this.productService.selectedProducts$.subscribe((selectedProducts) => {
      this.selectedProducts = selectedProducts.reduce((acc, current) => {
        // @ts-ignore
        acc[current] = true;
        return acc;
      }, {});
    });
  }

  OnAdd(productPreview: ProductPreview) {
    this.productService.addToDashboard(productPreview);
  }

  onStyle(col: number) {
    switch (col) {
      case 1: {
        this.styleCss = {'col-lg-12': true};
        break;
      }
      case 2: {
        this.styleCss = {'col-lg-6': true};
        break;
      }
      case 3: {
        this.styleCss = {'col-lg-4': true};
        break;
      }
      case 4: {
        this.styleCss = {'col-lg-3': true};
        break;
      }
      case 6: {
        this.styleCss = {'col-lg-2': true};
        break;
      }
    }
  }
}

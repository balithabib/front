import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductPreview} from '../product/models/product-preview';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isAuth = false;
  products = [];
  styleCss: object = {'col-lg-3': true};
  length = 0;

  constructor(private productService: ProductService, private route: Router) {
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
    this.length = this.productService.getLength();
  }

  OnAdd(productPreview: ProductPreview) {
    this.productService.addToDashboard(productPreview);
    this.length = this.productService.getLength();
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

  onDashboard() {
    this.route.navigate(['dashboard']);
  }
}

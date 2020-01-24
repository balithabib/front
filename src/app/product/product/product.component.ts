import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProductPreview} from './models/product-preview';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  product: any = {
    stock: 0,
    name: 'name',
    color: 'color',
    price: '0€00',
    comment: [],
    thumbnails: [],
  };
  id: string;
  defaultImg: string;
  products: ProductPreview[];
  navigationSubscription;

  constructor(private productService: ProductService, private route: ActivatedRoute, private  router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getById(this.id).then(value => {
      this.product = value;
      this.defaultImg = this.product.thumbnails[0];
    });

    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      error => console.log(error)
    );
  }

  getColor() {
    if (this.product.stock < 5) {
      return 'red';
    } else {
      return 'green';
    }
  }

  OnOver(thumbnail: string) {
    this.defaultImg = thumbnail;
  }

  OnClick(id: number) {
    this.router.navigate(['products/' + id]);
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.ngOnInit();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}

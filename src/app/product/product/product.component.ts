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
    name: 'name',
    color: 'color',
    price: '0€00',
    size: '',
    comment: [],
    images: [],
  };
  id: string;
  defaultImg: string;
  products: ProductPreview[];
  ingredients: any;
  description = [];
  navigationSubscription;
  sizePrice = [];

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
      this.defaultImg = this.product.images[0];
      if (this.description.length === 0) {
        for (let i = 0; i < this.product.description.length; i++) {
          this.description.push({ingredient: this.product.description[i], checked: true});
        }
      }
      if (this.sizePrice.length === 0) {
        const prices = this.product.price.split('|');
        const sizes = this.product.size.split('|');
        for (let i = 0; i < prices.length; i++) {
          this.sizePrice.push({price: prices[i], size: sizes[i], checked: false});
        }
      }
    });

    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      error => console.log(error)
    );

    this.productService.getAllIngredients().then((a: any) => {
        this.ingredients = a;
        console.log(a);
      },
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

  OnAdd() {
    const sizePrice: any = this.sizePrice.filter(value => value.checked);
    const ingredients: any = this.ingredients.filter(value => value.checked);
    const description: any = this.description.filter(value => value.checked);
    console.log(sizePrice);
    const product = {
      id: this.product.id,
      name: this.product.name,
      type: this.product.type,
      size: sizePrice[0].size,
      price: sizePrice[0].price,
      quantity: this.product.quantity,
      ingredients: ingredients.concat(description),
      images: this.product.images,
      amount: 1,
    };
    console.log(product);
    this.productService.addToDashboard(product);
  }

  onDashboard() {
    this.router.navigate(['dashboard']);
  }

  setChange(a: any) {
    a.checked = !a.checked;
  }
}

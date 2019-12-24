import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {
    stock: 0,
    name: 'name',
    color: 'color',
    price: '0€00',
    comment: [],
    thumbnails: [],
  };
  id: number;
  defaultImg: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productService.getById(this.id).then(value => {
      this.product = value;
    });
    this.defaultImg = this.product.thumbnails[0];
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

}

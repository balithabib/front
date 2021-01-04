import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductPreview} from '../product/models/product-preview';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];
  info = [];
  styleCss: object = {'col-lg-3': true};

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    console.log('init');
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
        this.info = [];
        const sort = products.sort((p1, p2) => p2.love - p1.love);
        for (let i = 0; i < sort.length; i++) {
          const status = this.getStatus(i, sort[i]);
          const color = this.getColor(status);
          this.info.push({status, color, sort: sort[i].love, id: sort[i].id});
        }
        console.log('---------', this.products, this.info);
      },
      error => console.log(error)
    );
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

  getPrice(price) {
    return 'à partir de ' + price.split('|')[0];
  }

  addLove(product) {
    console.log('after addLove:', product);
    this.productService.addLove(product.id).then(value => {
      console.log('addLove:', value);
      product.love++;
    });
  }

  addBad(product) {
    console.log('after subLove:', product);
    this.productService.addBad(product.id).then(value => {
      console.log('subLove:', value);
      product.bad++;
    });
  }

  getStatus(position, product) {
    let l = 'À découvrir';
    switch (position) {
      case 0:
      case 1:
      case 2:
        l = 'Populaire';
        break;
    }
    if (product.love === 0 && product.bad === 0 && product.buy === 0) {
      l = 'Nouvelle';
    }
    return l;
  }

  getColor(status) {
    switch (status) {
      case 'À découvrir':
        return 'orange';
      case 'Populaire':
        return 'green';
      case 'Nouvelle':
        return 'greenyellow';
    }
  }

  getInfoStatus(id) {
    const find = this.info.find(value => value.id === id);
    return find ? find.status : '';
  }

  getInfoColor(id) {
    const find = this.info.find(value => value.id === id);
    return find ? find.color : '';
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/services/product.service';
import {ProductPreview} from '../product/product/models/product-preview';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products = [];
  user: any;
  displayedColumns: string[] = ['name', 'image', 'unit_price', 'amount', 'total_price', 'delete', 'status'];
  dataSource = null;
  validated: boolean = false;
  command: any;
  status = '';
  id: number;

  constructor(private productService: ProductService, private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.authService.getById(id).then((value: any) => {
      this.user = value.user;
      console.log('user : ', this.user);
      this.productService.set(this.user);
      this.productService.getAllCommand().then((commands: any) => {
        const sort = commands.filter(c => c.number === this.user.email && c.status === 'validated').sort((c1, c2) => c2.id - c1.id);
        if (sort && sort[0]) {
          this.status = sort[0].status;
          this.id = sort[0].id;
        } else {
          this.status = 'finished';
        }
      });
      this.productService.selectedProducts.subscribe((products) => {
        this.products = products;
        this.dataSource = new MatTableDataSource<ProductPreview>(this.products);
        console.log('product : ', this.products);
      });
    });
  }

  getTotalCost() {
    return String(this.products ?
      this.products
        .map(product => this.getPriceAmount(product))
        .reduce((acc, value) => acc + value, 0) : '')
      .replace('.', '€');
  }

  getPrice(price) {
    return Number(price.split('|')[0].replace('€', '.'));
  }

  OnDelete(productId: number) {
    this.productService.deleteCommand(this.id, productId);
    this.dataSource = new MatTableDataSource<ProductPreview>(this.products);
  }

  OnAdd(productId) {
    const id = this.getId(productId);
    this.products[id].amount++;
  }

  OnSub(productId) {
    const id = this.getId(productId);
    const amount = this.products[id].amount;
    this.products[id].amount = amount > 0 ? amount - 1 : 0;
  }

  getId(productId) {
    return this.products.findIndex(product => product.id === productId);
  }

  validate() {
    const ids = this.products.map(a => a.id);
    this.validated = true;
    const command = {
      idsProduct: ids,
      name: this.user.name,
      number: this.user.email,
      ingredients: [],
      status: 'validated',
      date: Date.now(),
      price: this.getTotalCost().replace('€', '.')
    };
    this.productService.sendCommand(command).then(value => {
      this.command = value;
    });
    ids.forEach(value => this.productService.addBuy(value).then(value1 => console.log(value1)));

  }

  getStatus() {
    console.log(this.validated, this.status);
    if (this.validated || this.status === 'validated') {
      return 'En préparation ...';
    }
    if (this.status === 'finished') {
      return 'Finished';
    }
    return 'Non validé';
  }

  getPriceAmount(product) {
    return this.getPrice(product.price) * product.amount;
  }
}

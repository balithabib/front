import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product/services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  products = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    console.log('init');
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      error => console.log(error)
    );
  }

  getPrice(price) {
    return 'à partir de ' + price.split('|')[0];
  }

  onDelete(product: any) {
    this.productService.delete(product.id)
      .then((value: any) => {
        console.log(value);
        this.products.splice(this.products.findIndex(value1 => value1.id === product.id), 1);
      });
  }
}

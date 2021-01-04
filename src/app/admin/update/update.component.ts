import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../product/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  reactiveFormAdd: FormGroup;
  sizes = [
    {name: 'JUNIOR', control: 'price_junior', price: ''},
    {name: 'SENIOR', control: 'price_senior', price: ''},
    {name: 'MEGA', control: 'price_mega', price: ''}
  ];
  files;
  products: any;
  select: boolean = false;
  oldProduct: any = {};

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
        console.log('products : ', products);
      },
      error => console.log(error)
    );

    this.reactiveFormAdd = this.formBuilder.group({
      name: [''],
      type: [''],
      quantity: [''],
      description: [''],
      price_junior: [''],
      price_senior: [''],
      price_mega: [''],
      image: ['']
    });
  }

  onUpdate() {
    const value = this.reactiveFormAdd.value;
    const product = {
      name: value.name !== '' ? value.name : this.oldProduct.name,
      type: value.type !== '' ? value.type : this.oldProduct.type,
      size: this.getSize(value),
      price: this.getPrice(value),
      quantity: value.quantity !== '' ? value.quantity : this.oldProduct.quantity,
      description: value.description ? value.description.split(';') : this.oldProduct.description,
      images: []
    };

    console.log('update : ', product);
    this.productService.update(this.oldProduct.id, product)
      .then((value1: any) => {
        console.log(value1);
        console.log(this.files);
        if (this.files) {
          const formData: FormData = new FormData();
          for (let i = 0; i < this.files.length; i++) {
            const item = this.files.item(i);
            formData.append('images', item, item.name);
          }
          this.productService.image(formData, value1.id).then(value2 => {
            console.log(value2);
          });
        }
      });
  }

  getSize(value) {
    let size = '';
    if ((value.price_junior && value.price_junior !== '') || this.sizes[0].price !== '') {
      size += this.sizes[0].name;
    }

    if ((value.price_senior && value.price_senior !== '') || this.sizes[1].price !== '') {
      size += (size !== '' ? '|' : '') + this.sizes[1].name;
    }

    if ((value.price_mega && value.price_mega !== '') || this.sizes[2].price !== '') {
      size += (size !== '' ? '|' : '') + this.sizes[2].name;
    }
    return size;
  }

  getPrice(value) {
    let price = '';
    if (value.price_junior && value.price_junior !== '') {
      price += value.price_junior;
    } else if (this.sizes[0].price !== '') {
      price += this.sizes[0].price;
    }

    if (value.price_senior && value.price_senior !== '') {
      price += (price !== '' ? '|' : '') + value.price_senior;
    } else if (this.sizes[1].price !== '') {
      price += (price !== '' ? '|' : '') + this.sizes[1].price;
    }

    if (value.price_mega && value.price_mega !== '') {
      price += (price !== '' ? '|' : '') + value.price_mega;
    } else if (this.sizes[2].price !== '') {
      price += (price !== '' ? '|' : '') + this.sizes[2].price;
    }
    return price;
  }

  setFiles(files) {
    this.files = files;
  }

  setSelect(product: any) {
    console.log('product in database : ', product);
    this.select = true;
    this.oldProduct.id = product.id;
    this.oldProduct.name = product.name;
    this.oldProduct.type = product.type;
    this.oldProduct.quantity = product.quantity;
    this.oldProduct.description = product.description;
    const price = product.price.split('|');
    const size = product.size.split('|');

    if (size.includes('JUNIOR')) {
      this.sizes[0].price = price[0];
    }
    if (size.includes('SENIOR')) {
      this.sizes[1].price = price[1];
    }
    if (size.includes('MEGA')) {
      this.sizes[2].price = price[1];
    }
  }
}

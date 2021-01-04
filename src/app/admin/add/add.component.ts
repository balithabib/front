import {ProductService} from '../../product/services/product.service';
import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  reactiveFormAdd: FormGroup;
  sizes = [
    {name: 'JUNIOR', control: 'price_junior'},
    {name: 'SENIOR', control: 'price_senior'},
    {name: 'MEGA', control: 'price_mega'}
  ];
  files;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit() {
    this.reactiveFormAdd = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
      price_junior: [''],
      price_senior: [''],
      price_mega: [''],
      image: ['']
    });
  }

  onAdd() {
    const value = this.reactiveFormAdd.value;
    const product = {
      name: value.name,
      type: value.type,
      size: this.getSize(value),
      price: this.getPrice(value),
      quantity: value.quantity,
      description: value.description.split(';'),
      images: []
    };
    console.log('add : ', product);
    this.productService.create(product).then((value1: any) => {
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
      this.productService.initProductRecommendation(value1.id).then(value3 => {
        console.log(value3);
      });
    });
  }

  getSize(value) {
    let size = '';
    if (value.price_junior && value.price_junior !== '') {
      size += this.sizes[0].name;
    }
    if (value.price_senior && value.price_senior !== '') {
      size += (size !== '' ? '|' : '') + this.sizes[1].name;
    }
    if (value.price_mega && value.price_mega !== '') {
      size += (size !== '' ? '|' : '') + this.sizes[2].name;
    }
    return size;
  }

  getPrice(value) {
    let price = '';
    if (value.price_junior && value.price_junior !== '') {
      price += value.price_junior;
    }
    if (value.price_senior && value.price_senior !== '') {
      price += (price !== '' ? '|' : '') + value.price_senior;
    }
    if (value.price_mega && value.price_mega !== '') {
      price += (price !== '' ? '|' : '') + value.price_mega;
    }
    return price;
  }

  setFiles(files) {
    this.files = files;
  }
}


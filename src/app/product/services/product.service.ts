import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ProductPreview} from '../product/models/product-preview';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductPreview[] = null;
  URL = 'http://localhost:3000/product/';
  length = 0;
  selectedProducts = new BehaviorSubject<ProductPreview[]>([]);
  selectedProducts$ = this.selectedProducts.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  addToDashboard(productPreview: ProductPreview) {
    const test = this.selectedProducts.value.find(product => product.id === productPreview.id);
    if (!test) {
      let newProduct = this.selectedProducts.value;
      newProduct = [...newProduct, productPreview];
      this.selectedProducts.next(newProduct);
      this.length++;
    }
  }

  getAll(): Observable<ProductPreview[]> {
    console.log(this.URL + 'all');
    if (this.products) {
      return of(this.products);
    }
    return (this.httpClient.get(this.URL + 'all') as Observable<any[]>)
      .pipe(
        map((products) => {
          return products.map((productJson) => {
            return {
              id: productJson.id,
              stock: productJson.stock,
              name: productJson.name,
              color: productJson.color,
              price: productJson.price,
              comment: productJson.comment,
              thumbnails: productJson.thumbnails,
              amount: 1
            };
          });
        }), tap((products) => {
          this.products = products;
          console.log(products);
        })
      );
  }

  async getById(id: string) {
    console.log(this.URL + 'one/' + id);
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + 'one/' + id).subscribe(value => {
        resolve(value);
      });
    });
  }

  getLength() {
    return this.length;
  }
}

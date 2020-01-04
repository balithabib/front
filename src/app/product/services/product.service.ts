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

  selectedProducts = new BehaviorSubject<ProductPreview[]>([]);
  selectedProducts$ = this.selectedProducts.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  addToDashboard(productPreview: ProductPreview) {
    let newProduct = this.selectedProducts.value.filter((alreadyProduct) => {
      if (alreadyProduct.id !== productPreview.id) {
        return alreadyProduct;
      }
    });
    if (newProduct.length === this.selectedProducts.value.length) {
      newProduct = [...newProduct, productPreview];
    }
    this.selectedProducts.next(newProduct);
  }

  getAll(): Observable<ProductPreview[]> {
    if (this.products) {
      return of(this.products);
    }
    return (this.httpClient.get(this.URL + 'get_all') as Observable<any[]>)
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

  async getById(id: number) {
    console.log(this.URL + 'get/' + id);
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + 'get/' + id).subscribe(value => {
        resolve(value);
      });
    });
  }
}

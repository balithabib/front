import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductPreview} from '../product/models/product-preview';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductPreview[] = null;
  URL = 'http://localhost:3000/product';
  length = 0;
  selectedProducts = new BehaviorSubject<ProductPreview[]>([]);
  selectedProducts$ = this.selectedProducts.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAll().subscribe(
      products => {
        this.products = products;
      },
      error => console.log(error)
    );
  }

  addToDashboard(product: any) {
    const test = this.selectedProducts.value.find(productBdd => product.id === productBdd.id);
    if (!test) {
      let newProduct = this.selectedProducts.value;
      newProduct = [...newProduct, product];
      this.selectedProducts.next(newProduct);
      this.length++;
    }
  }

  deleteToDashboard(id: any) {
    const newProduct = this.selectedProducts.value;
    const pp = newProduct.filter(value => value.id !== id);
    this.selectedProducts.next(pp);
    this.length--;
  }


  getAll(): Observable<ProductPreview[]> {
    console.log(this.URL + '/all');
    return (this.httpClient.get(this.URL + '/all') as Observable<any[]>)
      .pipe(
        map((products) => {
          return products.map((productJson) => {
            return {
              id: productJson.id,
              name: productJson.name,
              type: productJson.type,
              size: productJson.size,
              price: productJson.price,
              quantity: productJson.quantity,
              description: productJson.description,
              images: productJson.images,
              amount: 1,
              love: productJson.love,
              bad: productJson.bad,
              buy: productJson.buy,
            };
          });
        }), tap((products) => {
          this.products = products;
          /*this.products.forEach(product => {
            this.getRecommendation(product.id).then(value => {
              value.love;
              value.bad;
              value.buy;
            });
          });*/
        })
      );
  }

  async getById(id: string) {
    console.log(this.URL + '/one/' + id);
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + '/one/' + id)
        .subscribe(value => {
          resolve(value);
        });
    });
  }

  async create(product) {
    console.log(this.URL + product);
    return await new Promise((resolve) => {
      this.httpClient.post(this.URL, product)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async image(images, id) {
    const url = 'http://localhost:3000/image/all/' + id;
    console.log(url);
    console.log('------', images);
    return await new Promise((resolve) => {
      this.httpClient.post(url, images)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async initProductRecommendation(id) {
    const url = 'http://localhost:3000/recommendation/set/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  getLength() {
    return this.length;
  }

  async update(id, product: any) {
    console.log(this.URL + '/update/' + id, product);
    return await new Promise((resolve) => {
      this.httpClient.post(this.URL + '/update/' + id, product)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async delete(id) {
    console.log(this.URL + '/delete/' + id);
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + '/delete/' + id)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async getAllIngredients() {
    console.log(this.URL + '/ingredients');
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + '/ingredients')
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async sendCommand(command: any) {
    const url = 'http://localhost:3000/command';
    return await new Promise((resolve) => {
      this.httpClient.post(url, command)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve(response);
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async getAllCommand() {
    const url = 'http://localhost:3000/command';
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async isFinished(command) {
    command.status = true;
    command.idsProduct = [];
    const url = 'http://localhost:3000/command/finished';
    return await new Promise((resolve) => {
      this.httpClient.post(url, command)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async getOldCommand(user) {
    const url = 'http://localhost:3000/command/user';
    return await new Promise((resolve) => {
      this.httpClient.post(url, user)
        .subscribe(
          (val: any) => {
            console.log('POST call successful value returned in body commmmmm: ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  findById(id) {
    console.log(id, this.products);
    return this.products ? this.products.find(p => p.id === id) : {};
  }

  set(user) {
    this.getAllCommand().then((commands: any) => {
      const sortElement = commands.filter(c => c.number === user.email && c.status === 'validated').sort((c1, c2) => c2.id - c1.id)[0];
      console.log('##########>>', sortElement);
      if (sortElement) {
        const filter = sortElement.idsProduct.map(idd => this.findById(Number(idd)));
        filter.forEach(p => this.addToDashboard(p));
      }
    });
  }

  async deleteCommand(idCommand: number, idProduct) {
    this.deleteToDashboard(idProduct);
    const url = 'http://localhost:3000/command/delete';
    const body: any = {idCommand: idCommand, idProduct: idProduct};
    return await new Promise((resolve) => {
      this.httpClient.post(url, body)
        .subscribe(
          (val: any) => {
            console.log('POST call successful value returned in body commmmmm: ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async getRecommendation(id) {
    const url = 'http://localhost:3000/recommendation/get/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async addLove(id) {
    const url = 'http://localhost:3000/recommendation/love_add/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async addBad(id) {
    const url = 'http://localhost:3000/recommendation/bad_add/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async addBuy(id) {
    const url = 'http://localhost:3000/recommendation/buy_add/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }


  async subLove(id) {
    const url = 'http://localhost:3000/recommendation/love_sub/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async subBad(id) {
    const url = 'http://localhost:3000/recommendation/bad_sub/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }

  async subBuy(id) {
    const url = 'http://localhost:3000/recommendation/buy_sub/' + id;
    console.log(url);
    return await new Promise((resolve) => {
      this.httpClient.get(url)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body : ', val);
            resolve(val);
          },
          (response) => {
            console.log('POST call in error', response);
            resolve({code: 'NOT_FOUND'});
          },
          () => {
            console.log('The POST observable is now completed.');
          }
        );
    });
  }
}

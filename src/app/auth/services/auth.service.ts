import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/auth/';
  user: any = {code: 'NOT_FOUND', access_token: ''};
  isAuth = false;
  image;

  constructor(private httpClient: HttpClient) {
  }

  async singIn(body: object, type: string) {
    return await new Promise(((resolve) => {
      this.isAuth = true;
      this.httpClient.post(this.url + type, body).subscribe(
        (val) => {
          console.log('POST call successful value returned in body : ', val);
          this.user = val;
          resolve(this.user);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
    }));
  }

  singOut() {
    this.isAuth = false;
  }

  async getImageBackground() {
    return await new Promise(((resolve) => {
      this.httpClient.get(this.url + 'get_background').subscribe(
        (val: any) => {
          console.log('POST call successful value returned in body : ', val);
          this.image = val.data;
          resolve(this.image);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
    }));
  }
}

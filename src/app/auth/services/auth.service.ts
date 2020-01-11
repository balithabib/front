import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:3000/auth/';
  user: any = {code: 'NOT_FOUND', access_token: ''};
  isAuth = false;
  image;

  constructor(private httpClient: HttpClient) {
  }

  async singIn(body: object, type: string) {
    return await new Promise(((resolve) => {
      this.httpClient.post(this.URL + type, body).subscribe(
        (val) => {
          console.log('POST call successful value returned in body : ', val);
          this.user = val;
          this.isAuth = true;
          resolve(this.user);
        },
        (response) => {
          this.user = {code: 'NOT_FOUND'};
          console.log('POST call in error', response);
          resolve(this.user);
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
      this.httpClient.get(this.URL + 'background/get').subscribe(
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

  async getById(id) {
    console.log(this.URL + 'profile');
    const headers = {headers: new HttpHeaders({Authorization: 'Bearer ' + id})};
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + 'profile', headers).subscribe(value => {
        resolve(value);
      });
    });
  }

  getStatus() {
    return this.isAuth;
  }
}

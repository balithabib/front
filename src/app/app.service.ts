import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  async getVisitors() {
    console.log(this.URL + '/visit');
    return await new Promise((resolve) => {
      this.httpClient.get(this.URL + '/visit')
        .subscribe((value: any) => {
          resolve(value);
        });
    });
  }
}

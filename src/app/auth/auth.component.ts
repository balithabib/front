import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean = false;
  image;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getImageBackground().then(
      (value: any) => {
        this.image = 'data:image/jpg;base64,' + value;
      }
    );
  }
}

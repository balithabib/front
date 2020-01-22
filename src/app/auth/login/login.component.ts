import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

const NOT_FOUND = 'NOT_FOUND';
const FOUND = 'FOUND';
const CREATED = 'CREATED';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  reactiveFormLogin: FormGroup;
  reactiveFormRegister: FormGroup;
  hide = true;
  status: string;


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.reactiveFormLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.reactiveFormRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      gender: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onLogin() {
    console.log('login : ', this.reactiveFormLogin.value);
    this.authService.singIn(this.reactiveFormLogin.value, 'login').then(
      (result: any) => {
        if (FOUND === result.code) {
          this.status = 'User is found';
          console.log(FOUND);
          this.router.navigate(['dashboard/:', {id: result.access_token}]);
        } else if (CREATED === result.code) {
          this.status = 'User is created';
          console.log(CREATED);
          this.router.navigate(['dashboard/:', {id: result.access_token}]);
        } else {
          this.status = 'User is not found';
          console.log(NOT_FOUND);
        }
      }
    );
  }

  onRegister() {
    this.reactiveFormRegister.value.address = 'default address';
    console.log('register : ', this.reactiveFormRegister.value);
    this.authService.singIn(this.reactiveFormRegister.value, 'register').then(
      (result: any) => {
        if (FOUND === result.code) {
          this.status = 'User is found';
          console.log(FOUND);
          this.router.navigate(['dashboard/:', {id: result.access_token}]);
        } else if (CREATED === result.code) {
          this.status = 'User is created';
          console.log(CREATED);
          this.router.navigate(['dashboard/:', {id: result.access_token}]);
        } else {
          this.status = 'User is not found';
          console.log(NOT_FOUND);
        }
      }
    );
  }

  get name() {
    return this.reactiveFormLogin.get('name');
  }

  get email() {
    return this.reactiveFormLogin.get('email');
  }

  get password() {
    return this.reactiveFormLogin.get('password');
  }

  onAutocompleteSelected(result) {
    console.log('onAutocompleteSelected: ', result);
  }
}

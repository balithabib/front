import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {passwordMatchValidator} from '../auth.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  reactiveFormLogin: FormGroup;
  hide = true;


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.reactiveFormLogin = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(type: string) {
    this.authService.singIn(this.reactiveFormLogin.value, type).then(
      (user: any) => {
        if (200 === user.status) {
          console.log('Coll');
          this.router.navigate(['dashboard']);
        } else {
          console.log('Kawed');
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
}

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
  authStatus: boolean;
  image;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.getImageBackground().then(
      (value: any) => {
        this.image = 'data:image/jpg;base64,' + value;
      }
    );
  }
}

// to use.
export const passwordMatchValidator = (controlNameToCompare: string): ValidatorFn | null => {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null;
    }
    const controlToCompare = c.root.get(controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? {compare: true} : null;
  };
};

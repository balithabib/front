import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthService} from './auth/services/auth.service';
import {ProductService} from './product/services/product.service';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobile = true;
  length = 0;
  menuItems = [
    {
      title: 'Accueil',
      path: '/products',
      icon: 'list',
      type: true
    },
    {
      title: 'Panier',
      path: '/dashboard',
      icon: 'shopping_cart',
      type: false
    },
    {
      title: 'Authentification',
      path: '/auth',
      icon: 'login',
      type: true
    }
  ];

  adminMenu = [
    {
      title: 'add',
      path: '/admin/add',
      icon: 'add_circle_outline'
    },
    {
      title: 'update',
      path: '/admin/update',
      icon: 'update'
    },
    {
      title: 'delete',
      path: '/admin/delete',
      icon: 'remove_circle_outline'
    },
    {
      title: 'statistics',
      path: '/admin/statistics',
      icon: 'insights'
    }
  ];
  private visitors: number = 0;

  ngOnInit() {
    this.bpo.observe('(max-width: 600px)').subscribe((state) => {
      this.isMobile = state.matches;
    });
    return this.appService.getVisitors().then((value: number) => this.visitors = value);
  }

  constructor(
    private bpo: BreakpointObserver,
    private authService: AuthService,
    private productService: ProductService,
    private appService: AppService) {
  }

  getStatus() {
    return this.authService.getStatus() ? 'green' : 'red';
  }

  getLengthDashboard() {
    return this.productService.getLength();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}

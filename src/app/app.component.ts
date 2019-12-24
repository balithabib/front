import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {DynamicTitleService} from './dynamic-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobile = true;
  items = [
    {
      title: 'Dashboard',
      route: 'dashboard',
      icon: 'dashboard'
    },
    {
      title: 'products',
      route: 'products',
      icon: 'list'
    }
  ];

  ngOnInit() {
    this.bpo.observe('(max-width: 600px)').subscribe((state) => {
      this.isMobile = state.matches;
    });
  }

  constructor(
    private bpo: BreakpointObserver,
    public dynamicTitleService: DynamicTitleService) {
  }
}

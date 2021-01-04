import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product/services/product.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  commands = [];
  products = [];
  numbers;
  total;
  visitors;

  constructor(private productService: ProductService, private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getVisitors().then(value => {
      this.visitors = value;
    });

    this.productService.getAllCommand().then(
      (commands: any) => {
        this.numbers = commands.length;
        this.total = commands
          .map(command => command.price)
          .reduce((acc, value) => acc + value, 0);
        console.log('---------------', this.total, this.numbers);
        this.productService.getAll().subscribe(
          products => {
            this.products = products;
            for (let i = 0; i < commands.length; i++) {
              const find = this.commands.find(value => value.id === commands[i].id);
              if (!find) {
                const map = commands[i].idsProduct.map(id => this.products.find(p => p.id === Number(id)));
                const b = [];
                for (let j = 0; j < map.length; j++) {
                  b.push({status: false, product: map[j]});
                }
                this.commands.push({
                  id: commands[i].id,
                  name: commands[i].name,
                  number: commands[i].number,
                  ingredients: commands[i].ingredients,
                  status: commands[i].status,
                  idsProduct: b,
                  date: commands[i].date,
                  price: commands[i].price,
                });
              }
            }
            console.log('<---------', this.commands);
          },
          error => console.log(error)
        );
      }
    );
  }

  isFinished(command, p) {
    p.status = true;

    if (command.idsProduct.every(pp => pp.status)) {
      this.productService.isFinished(command);
    }
  }
}

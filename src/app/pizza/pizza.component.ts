import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  firstPrice: string;
  secondPrice: string;
  firstDiameter: string;
  secondDiameter: string;
  cheap: string;
  price1: number;
  price2: number;

  constructor() { }

  ngOnInit() {
  }

  compareTwo() {
    let S1 = (Math.pow((Number(this.firstDiameter) / 2), 2)) * Math.PI;
    console.log(S1);
    let S2 = Math.PI * (Math.pow((Number(this.secondDiameter) / 2), 2));
    console.log(S2);
    this.price1 = Number(this.firstPrice) / S1;
    console.log(this.price1);
    this.price2 = Number(this.secondPrice) / S2;
    console.log(this.price2);
    if(this.price1 == NaN || this.price2 == NaN){
      this.cheap = 'none';
    }
    if(this.price1 > this.price2) {
      this.cheap = 'second';
    } else {
      this.cheap = 'first';
    }
  }

}

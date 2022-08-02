import { Component, OnInit } from '@angular/core';
import { Amount } from '../models/amounts.model';
import { Increment } from '../models/increments.model';

@Component({
  selector: 'app-model-popup-jack-green',
  templateUrl: './model-popup-jack-green.component.html',
  styleUrls: ['./model-popup-jack-green.component.scss']
})
export class ModelPopupJackGreenComponent implements OnInit {

  constructor() { }

    // tslint:disable-next-line: ban-types
    selectedAmount: Number | undefined;
    // tslint:disable-next-line: ban-types
    selectedIncrement: Number | undefined;

    amounts: Amount[] = [];
    increments: Increment[] = [];

    // tslint:disable-next-line: typedef
    radioAmountChangedHandeler(val: any) {
      this.selectedAmount = val;
    }
    // tslint:disable-next-line: typedef
    radioIncrementChangedHandeler(val: any) {
      this.selectedIncrement = val;
    }
    // tslint:disable-next-line: typedef
    submit(a: any , b: any) {

      this.selectedAmount = 10;
      this.selectedIncrement = 0;

      if (b < 1) {
        this.single(a);
      } else {
       this.multiple(a, b);
      }
    }

    // tslint:disable-next-line: typedef
    reset()
    {
      this.selectedAmount = 10;
      this.selectedIncrement = 0;
    }

    // tslint:disable-next-line: typedef
    single(a: any) {
      alert(a);
   }

    // tslint:disable-next-line: typedef
    multiple(a: any , b: any) {
       alert(a * b);
    }

    ngOnInit(): void {
      this.amounts = [
        {id: 10, value: '10'},
        {id: 100, value: '100'},
        {id: 1000, value: '1000'},
        {id: 10000, value: '10000'}
      ];

      this.selectedAmount = 10;

      this.increments = [
        {id: 0, value: '2x Amount'},
        {id: 2, value: '2'},
        {id: 3, value: '3'},
        {id: 4, value: '4'},
        {id: 5, value: '5'},
        {id: 6, value: '6'},
        {id: 7, value: '7'},
        {id: 8, value: '8'},
        {id: 9, value: '9'},
        {id: 10, value: '10'},
      ];

      this.selectedIncrement = 0;

    }

}

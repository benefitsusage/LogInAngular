import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-tab',
  templateUrl: './heart-tab.component.html',
  styleUrls: ['./heart-tab.component.scss']
})
export class HeartTabComponent implements OnInit {

  constructor() { }

  countDownDate = new Date('Apr 21, 2021 09:49:00').getTime();
  demo: any;
  x = setInterval(() => {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.demo = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0){
      clearInterval(this.x);
      this.demo = 'finished';
    }
  });

  ngOnInit(): void {
  }

}

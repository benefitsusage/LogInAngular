import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-king-tab',
  templateUrl: './king-tab.component.html',
  styleUrls: ['./king-tab.component.scss']
})
export class KingTabComponent implements OnInit {

  constructor() { }

  // countDownDate = new Date('Apr 21, 2021 14:37:00').getTime();
  currentTime = new Date('Apr 21, 2021 17:00:00');
  demo: any;

  currentMunite = this.currentTime
  .setMinutes( this.currentTime.getMinutes() + 1);

   countDownDate: any = new Date(this.currentMunite);

  // countDownDate = new Date().getTime();

  x = setInterval(() => {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.demo = minutes + ' : ' + seconds;

    if (distance < 0){
      clearInterval(this.x);
      this.demo = 'finished';
      // location.reload();
    }

  });

  ngOnInit(): void {
  }

}

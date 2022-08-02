import { timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  // countDownDate = new Date('Apr 21, 2021 14:37:00').getTime();
  countDownDate = new Date();
  demo: any;

  currentMoth = this.countDownDate.getMonth();
  currentDate = this.countDownDate.getDate();
  currentYear = this.countDownDate.getFullYear();
  currentHour = this.countDownDate.getHours();
  currentMunite = this.countDownDate.getMinutes();
  currentSeconds = this.countDownDate.getSeconds();

  time: any = new Date(this.currentYear, this.currentMoth, this.currentDate,
    this.currentHour, this.currentMunite, this.currentSeconds);

  timer = this.time.setMinutes(this.time.getMinutes());


  a = setInterval((y: any) => {

      y = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.time - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.demo = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      if (distance < 0){
        clearInterval(y);
        this.demo = 'finished';
        // location.reload();
      }

  });

});


    ngOnInit(): void {

    }

}

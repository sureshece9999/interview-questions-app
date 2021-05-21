import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 test = new Date().toString();
  constructor() { }

  ngOnInit() {
  }


  testDate() {
    console.log(this.test);
    let temp = this.test;
    new Date(temp).setHours(0);
    new Date(temp).setMinutes(0);
    new Date(temp).setSeconds(0);
    console.log(temp);
  }
}

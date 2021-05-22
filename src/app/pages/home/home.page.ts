import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  navigateToDetails(pageName: string) {
    switch (pageName) {
      case 'html':
        this.router.navigateByUrl('/html');
        break;

      default:
        break;
    }
  }
}

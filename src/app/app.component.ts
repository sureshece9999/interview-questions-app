import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'assets/images/home.png' },
    { title: 'Html', url: '/html', icon: 'assets/images/html.png' },
    { title: 'Angular', url: '/folder/Outbox', icon: 'assets/images/angular.png' },
    { title: 'JQuery', url: '/folder/Archived', icon: 'assets/images/jquery.png' },
    { title: 'CSS', url: '/folder/Trash', icon: 'assets/images/css.png' },
    { title: 'Javascript', url: '/folder/Favorites', icon: 'assets/images/js.png' },
    { title: 'Bootstrap', url: '/folder/Spam', icon: 'assets/images/bootstrap.png' },
  ];

  constructor() { }
}

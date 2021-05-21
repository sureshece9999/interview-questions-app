import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  // ionViewWillEnter() {
  //   // Disable side menu
  //   this.menuCtrl.swipeGesture(false);
  //   this.menuCtrl.enable(false);
  // }

  // ionViewDidLeave() {
  //   // Enable side menu
  //   this.menuCtrl.swipeGesture(true);
  //   this.menuCtrl.enable(true);
  // }
}

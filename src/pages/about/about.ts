import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public events: Events, public navCtrl: NavController) {}

  doLogout() {
    this.events.publish('user:logout');
  }
}

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Events, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public events: Events,
    public navCtrl: NavController,
    public firebaseAuth: AngularFireAuth
  ) {}

  doLogout() {
    this.firebaseAuth.auth.signOut()
      .then((success: any) => {
        console.log('success');
        console.log(success);
        this.events.publish('user:logout');
      })
      .catch((erro: any) => {
        console.log('error');
        this.events.publish('user:logout');
      });
  }
}

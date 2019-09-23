import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';
import { CountriesListPage } from '../countries-list/countries-list';
import { FavoritesListPage } from '../favorites-list/favorites-list';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesListPage;
  tab2Root = CountriesListPage;
  tab3Root = AboutPage;

  constructor(
    public events: Events, public navCtrl: NavController, public navParams: NavParams
  ) {
    this.events.subscribe('user:logout', () => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CountryModel } from '../../models/country-model';
import { CountryProvider } from '../../providers/country/country';

@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {

  country: CountryModel;
  isUpdate: boolean;

  continentList: Array<any> = [
    {'name': 'Ásia'},
    {'name': 'América'},
    {'name': 'África'},
    {'name': 'Europa'},
    {'name': 'Oceania'},
    {'name': 'Antártida'}
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public countryProvider: CountryProvider
  ) {
    if (this.navParams && (this.navParams.get('country') != null)){
      this.isUpdate = true;
      this.country = this.navParams.get('country');
    } else {
      this.isUpdate = false;
      this.country = new CountryModel();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailPage');
  }

  doSave() {
    if (this.isUpdate){
      this.countryProvider.updateItem(this.country)
        .then(item => {
          this.navCtrl.pop();
        });
    } else {
      this.countryProvider.addItem(this.country)
        .then(item => {
          this.navCtrl.pop();
        });
    }
  }

  doCancel() {
    this.navCtrl.pop();
  }
}

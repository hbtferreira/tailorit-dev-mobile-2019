import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CountryDetailPage } from '../country-detail/country-detail';
import { CountryProvider } from '../../providers/country/country';
import { CountryModel } from '../../models/country-model';

@Component({
  selector: 'page-countries-list',
  templateUrl: 'countries-list.html',
})
export class CountriesListPage {

  countries: Array<CountryModel>;
  searchText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public countryProvider: CountryProvider
  ) {
    this.countries = [];
  }

  ionViewDidEnter() {
    this.loadItems();
  }

  itemSelected(country: CountryModel) {
    this.navCtrl.push(CountryDetailPage, {'country': country});
  }

  addItem() {
    this.navCtrl.push(CountryDetailPage);
  }

  loadItems() {
    this.countryProvider.getItems()
      .then(items => {
        this.countries = items;
      });
  }

  filterItems() {
    if (this.searchText && this.searchText.trim() != '') {
      this.countries = this.countries.filter((item: CountryModel) => {
        let searchTxt: string = item.name;
        return (searchTxt.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
      });
    } else {
      this.loadItems();
    }
  }

  onCancel() {
    this.searchText = '';
    this.loadItems();
  }
}

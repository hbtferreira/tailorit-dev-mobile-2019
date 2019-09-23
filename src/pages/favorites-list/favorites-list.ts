import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CountryProvider } from '../../providers/country/country';
import { CountryModel } from '../../models/country-model';
import { CountryDetailPage } from '../country-detail/country-detail';

@Component({
  selector: 'page-favorites-list',
  templateUrl: 'favorites-list.html',
})
export class FavoritesListPage {

  countries: Array<CountryModel>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public countryProvider: CountryProvider,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.countries = [];
  }

  ionViewDidEnter(){
    this.loadItems();
  }

  itemSelected(country: CountryModel) {
    this.navCtrl.push(CountryDetailPage, {'country': country});
  }

  remove(country: CountryModel) {
    country.isFavorite = false;
    this.countryProvider.updateItem(country)
      .then(item => {
        this.loadItems();
      });
  }

  loadItems() {
    this.countryProvider.getItems()
      .then(items => {
        if (items) {
          this.countries = items.filter((country) => {
            return country.isFavorite;
          });
        }
      });
  }

  showMenu(item: CountryModel) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      enableBackdropDismiss: true,
      buttons: [{
        text: 'Veja Mais',
        icon: 'information-circle',
        cssClass: 'primary',
        handler: () => {
          this.itemSelected(item);
          return true;
        }
      },{
        text: 'Remover dos Favoritos',
        icon: 'remove-circle',
        cssClass: 'danger',
        role: 'destructive',
        handler: () => {
          this.remove(item);
          return true;
        }
      },{
        text: 'Cancelar',
        icon: 'close-circle',
        cssClass: 'dark',
        role: 'cancel',
      }]
    });
    actionSheet.present();
  }
}

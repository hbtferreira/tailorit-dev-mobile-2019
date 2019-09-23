import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CountryModel } from '../../models/country-model';

const ITEMS_KEY = 'countries';

@Injectable()
export class CountryProvider {

  constructor(private storage: Storage) {}

  addItem(item: CountryModel): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: CountryModel[]) => {
      if (items) {
        item.id = items.length + 1;
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }
      else {
        item.id = 1;
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  getItems(): Promise<CountryModel[]> {
    return this.storage.get(ITEMS_KEY);
  }

  updateItem(item: CountryModel): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: CountryModel[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: CountryModel[] = [];

      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  deleteItem(id: number): Promise<CountryModel> {
    return this.storage.get(ITEMS_KEY).then((items: CountryModel[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: CountryModel[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}

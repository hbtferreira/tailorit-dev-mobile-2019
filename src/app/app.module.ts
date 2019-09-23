import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { CountriesListPage } from '../pages/countries-list/countries-list';
import { FavoritesListPage } from '../pages/favorites-list/favorites-list';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { CountryDetailPage } from '../pages/country-detail/country-detail';
import { LoginPage } from '../pages/login/login';
import { CountryProvider } from '../providers/country/country';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    CountriesListPage,
    FavoritesListPage,
    CountryDetailPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    CountriesListPage,
    FavoritesListPage,
    CountryDetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountryProvider
  ]
})
export class AppModule {}

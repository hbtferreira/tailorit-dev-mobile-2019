import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Application Bootstrapper
 */
import { MyApp } from './app.component';
/**
 * Pages
 */
import { CountriesListPage } from '../pages/countries-list/countries-list';
import { FavoritesListPage } from '../pages/favorites-list/favorites-list';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { CountryDetailPage } from '../pages/country-detail/country-detail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
/**
 * Providers
 */
import { CountryProvider } from '../providers/country/country';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    CountriesListPage,
    FavoritesListPage,
    CountryDetailPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      tabsHighlight: true,
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    CountriesListPage,
    FavoritesListPage,
    CountryDetailPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountryProvider
  ]
})
export class AppModule {}

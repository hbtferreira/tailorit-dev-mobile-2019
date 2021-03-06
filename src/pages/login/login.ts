import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';
import { RegisterPage } from '../register/register';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: UserModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseAuth: AngularFireAuth
  ) {
    this.user = new UserModel();
  }

  doLogin() {
    this.firebaseAuth.auth.signInWithEmailAndPassword(this.user.email , this.user.password)
      .then((success: any) => {
        this.user.uid = success.user.uid;
        this.user.token = success.user.refreshToken;
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({
          message: 'Houve um erro ao efetuar o login.' + error,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();
      });
  }

  goToRegister(){
    this.navCtrl.setRoot(RegisterPage);
  }
}

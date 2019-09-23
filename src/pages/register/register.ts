import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: UserModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseAuth: AngularFireAuth
  ) {
    this.user = new UserModel();
  }

  doRegister(){
    this.firebaseAuth.auth.createUserWithEmailAndPassword(this.user.email , this.user.password)
      .then((success: any) => {
        this.user.uid = success.user.uid;
        this.user.token = success.user.refreshToken;
        let toast = this.toastCtrl.create({
          message: 'Cadastro realizado com sucesso.',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.onDidDismiss(()=>{
          this.navCtrl.setRoot(TabsPage);
        });
        toast.present();
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({
          message: 'Houve um erro ao efetuar seu cadastro: ' + error,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();
      });
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
}

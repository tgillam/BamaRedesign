import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

import { HomePage } from '../home/home';
import { HomePage2 } from '../home2/home2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  bamaId:string = '';
  password:string = '';

  constructor(public navCtrl: NavController,  public alertCtrl: AlertController) {
  }

  login(){
    console.log("Bama ID: "+ this.bamaId)
    console.log("Password: "+ this.password)

    if(this.bamaId === '' || this.password === ''){
        let alert = this.alertCtrl.create({
          title:'Login Error',
          subTitle:'All fields are rquired',
          buttons:['OK']
        });
        alert.present();
        return;
      }

    else if(this.bamaId !== 'nlsaban' || this.password !== 'rolltide'){
        let alert = this.alertCtrl.create({
          title:'Login Error',
          subTitle:'Invalid credentials',
          buttons:['OK']
        });
        alert.present();
        return;
      }

    else{
      this.navCtrl.push(HomePage);
    }
  }

  notStudent(){
    this.navCtrl.push(HomePage2);
  }
}

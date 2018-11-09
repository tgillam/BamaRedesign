import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-transportation',
  templateUrl: 'transportation.html',
})
export class Transportation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Transportation');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
}

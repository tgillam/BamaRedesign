import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class Student {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Student');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
}

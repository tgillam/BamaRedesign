import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-course-catalog',
  templateUrl: 'course-catalog.html',
})
export class CourseCatalog {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseCatalog');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
}

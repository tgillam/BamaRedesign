import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bamaid:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("Bama Id: "+ this.bamaid)
    console.log("Password: "+ this.password)
  }
}

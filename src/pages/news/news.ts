import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Article1Page } from './articles/article1';
import { Article2Page } from './articles/article2';
import { Article3Page } from './articles/article3';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  @ViewChild('slides') slides: Slides;
  
  slidesInfo = [
    {
      title: 'First slide',
      description: 'First slide desc',
      image:'assets/imgs/news1.jpg',
      heading: 'TRENDING',
      paragraph: 'New Grad Program Integrates Data Analysis, Business Applications'
    },
    {
      title: 'Second slide',
      description: 'Second slide desc',
      image:'assets/imgs/news2.jpg',
      heading: 'TRENDING',
      paragraph: 'Campus Hours for Fall Break 2018'
    },
    {
      title: 'Third slide',
      description: 'Third slide desc',
      image:'assets/imgs/news3.jpg',
      heading: 'TRENDING',
      paragraph: 'UA Celebrates the Unveiling of H.M. Comer'
    }
  ]

  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
  openArticle() {
    var currentSlide = this.slides.getActiveIndex();
    console.log('Opening article with index ' + currentSlide);
    if(currentSlide == 1) {
      this.navCtrl.push(Article1Page);
    }
    else if(currentSlide == 2) {
      this.navCtrl.push(Article2Page);
    }
    else {
      this.navCtrl.push(Article3Page);
    }
    //this.navCtrl.push(Article1Page);
  }
  
  /**nextSlide(speed) {
    var currentIndex = this.slides.getActiveIndex();
    console.log('Active index is ' + currentIndex);
    var slideShowLength = this.slidesInfo.length;
    var destination = currentIndex + 1;
    if (currentIndex == slideShowLength - 1) {
      destination = 0;
    }
    this.slides.slideTo(destination,speed);
    //this.slides.slideNext(speed);
  }

  prevSlide(speed) {
    var currentIndex = this.slides.getActiveIndex();
    console.log('Active index is ' + currentIndex);
    var slideshowLength = this.slidesInfo.length;
    var destination = slideshowLength - 1;
    if (currentIndex != 0) {
      destination = currentIndex - 1;
    }
    this.slides.slideTo(destination,speed);
    //this.slides.slidePrev(speed);
  }*/

}
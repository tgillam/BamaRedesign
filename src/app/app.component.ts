import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { Headline1Page } from '../pages/home/headlines/headline1/headline1';
import { Headline2Page } from '../pages/home/headlines/headline2/headline2';
import { Headline3Page } from '../pages/home/headlines/headline3/headline3';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from '../pages/home2/home2';
import { CampusMap } from '../pages/campus-map/campus-map';
import { Student } from '../pages/student/student';
import { CourseCatalog } from '../pages/course-catalog/course-catalog';
import { Emergency } from '../pages/emergency/emergency';
import { Transportation } from '../pages/transportation/transportation';
import { CampusDirectory } from '../pages/campus-directory/campus-directory';
import { Laundry } from '../pages/laundry/laundry';
import { Events } from '../pages/events/events';
import { Links } from '../pages/links/links';
import { News } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Home', component: HomePage2 },
      { title: 'Campus Map', component: CampusMap },
      { title: 'Student', component: Student },
      { title: 'Course Catalog', component: CourseCatalog },
      { title: 'Emergency', component: Emergency },
      { title: 'Transportation', component: Transportation },
      { title: 'Campus Directory', component: CampusDirectory },
      { title: 'Laundry', component: Laundry },
      { title: 'Events', component: Events },
      { title: 'Links', component: Links },
      { title: 'News', component: News }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}

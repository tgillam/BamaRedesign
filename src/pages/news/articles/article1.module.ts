import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Article1Page } from './article1';

@NgModule({
  declarations: [
    Article1Page,
  ],
  imports: [
    IonicPageModule.forChild(Article1Page),
  ],
})
export class Article1PageModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampusMap } from './campus-map';

@NgModule({
  declarations: [
    CampusMap,
  ],
  imports: [
    IonicPageModule.forChild(CampusMap),
  ],
})
export class CampusMapModule {}

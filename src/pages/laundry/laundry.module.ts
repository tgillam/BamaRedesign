import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Laundry } from './laundry';

@NgModule({
  declarations: [
    Laundry,
  ],
  imports: [
    IonicPageModule.forChild(Laundry),
  ],
})
export class LaundryModule {}

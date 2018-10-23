import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseCatalog } from './course-catalog';

@NgModule({
  declarations: [
    CourseCatalog,
  ],
  imports: [
    IonicPageModule.forChild(CourseCatalog),
  ],
})
export class CourseCatalogModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelativesPage } from './relatives';

@NgModule({
  declarations: [
    RelativesPage,
  ],
  imports: [
    IonicPageModule.forChild(RelativesPage),
  ],
})
export class RelativesPageModule {}

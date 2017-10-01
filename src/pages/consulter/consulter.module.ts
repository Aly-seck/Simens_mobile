import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Consulter } from './consulter';

@NgModule({
  declarations: [
    Consulter,
  ],
  imports: [
    IonicPageModule.forChild(Consulter),
  ],
  exports: [
    Consulter
  ]
})
export class ConsulterModule {}

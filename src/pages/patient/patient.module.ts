import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Patient } from './patient';

@NgModule({
  declarations: [
    Patient,
  ],
  imports: [
    IonicPageModule.forChild(Patient),
  ],
  exports: [
    Patient
  ]
})
export class PatientModule {}

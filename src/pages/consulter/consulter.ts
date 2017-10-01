import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Consulter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-consulter',
  templateUrl: 'consulter.html',
})
export class Consulter {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('patient'));
  }

}

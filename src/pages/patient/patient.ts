import { Component } from '@angular/core';
import { AlertController,  IonicPage,   NavController,   NavParams} from 'ionic-angular';

import { Consulter } from '../consulter/consulter';

/**
 * Generated class for the Patient page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class Patient {
  patients=
	[
	  {
	    "_id": "5936cd8299d5979019efe584",
	    "picture": "p9.jpg",
	    "age": 26,
	    "name": "Aly seck",
	    "gender": "Masculin",
	    "email": "alysck@gmail.com",
	    "phone": "774385410 ",
	    "address": "10G2A-Campus UGB"
	  },
	  {
	    "_id": "5936cd82603251259de192ed",
	    "picture": "060515_164807.jpg",
	    "age": 30,
	    "name": "Bineta Diop",
	    "gender": "femele",
	    "email": "berryfuentes@orbalix.com",
	    "phone": "221 (833) 434-2729 ",
	    "address": "588 Main Street, Centerville, Kentucky, 139"
	  },
	  {
	    "_id": "5936cd82417262af7eb65d60",
	    "picture": "fa1.jpg",
	    "age": 23,
	    "name": "Fatou Gueye",
	    "gender": "female",
	    "email": "belindanolan@orbalix.com",
	    "phone": "221 (802) 421-2949 ",
	    "address": "849 Surf Avenue, Walker, Oregon, 132"
	  },
	  {
	    "_id": "5936cd829fd5f3c1e179fa0b",
	    "picture": "p3.jpg",
	    "age": 33,
	    "name": "Olsen Tucker",
	    "gender": "male",
	    "email": "olsentucker@orbalix.com",
	    "phone": "221 (991) 449-3731 ",
	    "address": "871 Erasmus Street, Topanga, West Virginia, 1084"
	  },
	  {
	    "_id": "5936cd8235c2e01834b81e1e",
	    "picture": "p4.jpg",
	    "age": 26,
	    "name": "Emerson Edwards",
	    "gender": "male",
	    "email": "emersonedwards@orbalix.com",
	    "phone": "221 (916) 489-3916 ",
	    "address": "375 Gotham Avenue, Fostoria, Nevada, 148"
	  },
	  {
	    "_id": "5936cd8220979490ada22edb",
	    "picture": "p5.jpeg",
	    "age": 26,
	    "name": "Melva Morales",
	    "gender": "female",
	    "email": "melvamorales@orbalix.com",
	    "phone": "221 (932) 403-3376 ",
	    "address": "777 Fulton Street, Glenshaw, Illinois, 321"
	  }
	];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  consulter(patient)
  {
  	let prompt=this.alertCtrl.create({
			title:'Consultation',
			message:patient.name,
			inputs:[
        {
          name:'poids',
          placeholder:'Poids'
        },
        {
          name:'Taille',
          placeholder:'Taille'
        },
        {
					name:'temperature',
					placeholder:'Temperature'
				}

			],
			buttons:[
				{
					text:'Continuer',
					handler:data=>{
							this.navCtrl.push(Consulter,{patient});
					}
				},
				{
					text:'Quitter',
					handler:data=>{

					}
				}
			]
		});

		prompt.present();
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Patient} from '../patient/patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private login : FormGroup;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
  	this.login=this.formBuilder.group({
  		utilisateur:['',Validators.required],
  		password:['',Validators.minLength(5)]
  	})
  }

  loginForm(){
  	let username=this.login.value;
  	if(username.utilisateur=="docteur" && username.password=="12345678"){
  		this.navCtrl.push(Patient);
  	}
  }
}

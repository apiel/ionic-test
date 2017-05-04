import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, ViewController } from 'ionic-angular';

import { EmailValidator } from  '../../validators/email';

/**
 * Generated class for the LoginModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModal {
  form: FormGroup;
  submitAttempt: boolean = false;

  constructor(public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  } 

  signin() {
    this.submitAttempt = true;
    if (!this.form.valid) {
      console.log('form error');
    }
    else {
      console.log('Sign in');
      this.closeModal();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

import { ApiService, Post } from '../../lib/api.service';
import { LoginModal } from '../login-modal/login-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage implements OnInit {
  posts: Post[];
  errorMessage: string;
  language: string = 'en';
  langs: string[] = ['en', 'de'];

  constructor(public navCtrl: NavController, 
              public apiService: ApiService,
              public translate: TranslateService,
              public modalCtrl: ModalController) {
                translate.setDefaultLang(this.language);
              }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts()
                    .subscribe(
                      posts => this.posts = posts,
                      error =>  this.errorMessage = error);
  }  

  openModal() {
    const modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }
}

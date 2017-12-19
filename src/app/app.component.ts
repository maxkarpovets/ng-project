import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UserService } from './shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { GreetingsService } from './shared/services/greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  id: "";
  user: any;
  
  constructor(public afAuth: AngularFireAuth,
              public userService: UserService,
              private greetingsService : GreetingsService) {

    var database = firebase.database();
  }

  loginFirst() {
    this.doLogin('test1@test.com', 'user1234');
  }

  loginSecond() {
    this.doLogin('test2@test.com', 'user1234');
  }

  doLogin(email, pass) {
   this.userService.doLogin(email,pass);
  }
  
  logout() {
    this.userService.logout();
  }

  isLogged() {
    this.userService.getUser();
  }

  showGreetings() {
    this.greetingsService.showGreetings('Hello user');
  }

  hideGreetings() {
    this.greetingsService.hideGreetings();
  }
};
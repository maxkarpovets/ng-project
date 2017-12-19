/*
 * Service for user state managing.
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  id: "";
  path: any;
  permissions: any;
  
  constructor(public afAuth: AngularFireAuth) {
    var database = firebase.database();
  }

  /*
  * Logging current user.
  * @param {string} email.
  * @param {string} pass.
  */
  doLogin(email:string, pass:string) {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass).then((authData) => {
      let path = 'users/' + authData.uid;
      var adaRef = firebase.database().ref(path).once("value").then((snapshot) => {
        this.permissions = snapshot.val();
        alert('Now You have permissions to ' + this.permissions.permissions)
      });
    });

    return this.permissions;
  }

  getPermissions() {
    if(this.permissions) { return this.permissions.permissions };
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

  getUser(){
    return this.afAuth.authState;
  }
}


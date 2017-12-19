/*
 * Service for getting media data.
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class MediaService {

  id: "";
  media: any;
  user: any;
  
  constructor(public afAuth: AngularFireAuth) {
    var database = firebase.database();
  }

  getMedia() {
    return firebase.database().ref("media/-Kf4qzY_HRmatwo-p-7H").once("value");
  }

}

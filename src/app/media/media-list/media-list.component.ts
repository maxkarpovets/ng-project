/*
 * Media list component
 */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})

export class MediaListComponent implements OnInit {
  medialist: any;

  constructor( private mediaService:MediaService ) { }

  ngOnInit() {
    this.mediaService.getMedia().then((snapshot) => {
      this.medialist = snapshot.val();
      this.medialist = this.medialist.articles;
   });;
  }
}

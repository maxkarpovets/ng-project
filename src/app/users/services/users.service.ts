/*
 * Service for getting users list.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  constructor(private http: Http) {}
   getUsers() {
    return this.http.get("https://randomuser.me/api/?results=50")
      .map(result => result.json())
 }
}

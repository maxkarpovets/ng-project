/*
 * Service for showing/hiding greetings.
 * 
 * Needs for item 6 from Functional Requirements: 
 * 'Events management - Communication between different layout 
 * components needs to be eventbased'
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GreetingsService {
  private greetingsSubject = new Subject<any>();
  
  constructor() { }

  showGreetings(message: string) {
    this.greetingsSubject.next({ text: message });
  }

  hideGreetings() {
    this.greetingsSubject.next();
  }

  getGreetings(): Observable<any> {
    return this.greetingsSubject.asObservable();
  }
}

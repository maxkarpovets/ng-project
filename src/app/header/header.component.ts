/*
 * Header component
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GreetingsService } from '../shared/services/greetings.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  greetings: string;
  subscription: Subscription;

  constructor(private greetingsService: GreetingsService ) {
    // subscription for greetings operations.
    this.subscription = this.greetingsService.getGreetings().subscribe(
      data => { 
        this.greetings = data;
      });
   }

  ngOnInit() {}

}

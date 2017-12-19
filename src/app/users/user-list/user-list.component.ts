/*
 * Component for displaying  users list.
 */

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatDialog } from "@angular/material";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: any;
  selectedUser: any;
  constructor(public usersService: UsersService, public dialog: MatDialog) { }

   ngOnInit() {
    this.usersService.getUsers()
     .subscribe(
       (data) => {
         this.users = data.results;
     },
     err => console.log('Error with users getting'), 
     () => console.log("The stream is over")

   )

   
 }
  openDialog(user) {
    this.selectedUser = user;
  }

}


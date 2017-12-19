import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './services/users.service';

import {MatCardModule,MatInputModule,MatButtonModule} from "@angular/material";
import { UserComponent } from './user/user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { AdDirective } from '../shared/ad.directive';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  entryComponents: [UserDataComponent],
  declarations: [UserListComponent, UserComponent, UserDataComponent, AdDirective],
  providers: [UsersService],
})

export class UsersModule { }

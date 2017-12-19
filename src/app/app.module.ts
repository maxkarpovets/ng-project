import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
// Components
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Angular Material
import {
    MatSidenavModule, MatDialogModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatSlideToggleModule,
    MatCheckboxModule, MatListModule, MatSelectModule, MatInputModule, MatTooltipModule, MatRadioModule, MatTabsModule, MatCardModule, MatIconModule,
    MatProgressBarModule
} from "@angular/material";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Routing
import { RouterModule,  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { appRoutingProviders, routing } from "./app.routing";

// Icons
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Services
import { UserService } from './shared/services/user.service';
import { GreetingsService } from './shared/services/greetings.service';

// Modules
import { UsersModule } from "./users/users.module";

//
import { PermissionGuard } from './shared/guards/permission.guard';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    RouterModule,
    routing,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,

    MatSidenavModule, MatDialogModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatSlideToggleModule,
    MatCheckboxModule, MatListModule, MatSelectModule,
     MatInputModule, MatTooltipModule, MatRadioModule, MatTabsModule, MatCardModule, MatIconModule,
    MatProgressBarModule,

    UsersModule
  ],
  providers: [appRoutingProviders, UserService, GreetingsService, PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './loguot/loguot.component';

import {AuthGuard} from './auth.guard';
import {UserService} from './user.service';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    AuthComponent,
    MainPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

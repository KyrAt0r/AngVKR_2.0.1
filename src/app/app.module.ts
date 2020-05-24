import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AuthGuard} from './auth.guard';
import {UserService} from './user.service';
import {AuthService} from './auth.service';
import {LogoutComponent} from './logout/logout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    AuthComponent,
    MainPageComponent,
    LogoutComponent,
    AboutComponent
    CreateEditComponent
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

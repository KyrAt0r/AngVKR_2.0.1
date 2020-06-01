import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { TopteamComponent } from './topteam/topteam.component';
import {TestComponent} from './test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    AuthComponent,
    MainPageComponent,
    LogoutComponent,
    AboutComponent,
    CreateEditComponent,
    CreateSubjectComponent,
    CreateTeamComponent
    EditPasswordComponent,
    TopteamComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

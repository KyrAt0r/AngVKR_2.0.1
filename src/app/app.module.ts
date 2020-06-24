import { BrowserModule, Title } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LogoutComponent } from './logout/logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { TopteamComponent } from './topteam/topteam.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ExerciseComponent } from './exercise/exercise.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { ExpidComponent } from './expid/expid.component';
import { TaskComponent } from './task/task.component';
import { SubjChoiceComponent } from './subj-choice/subj-choice.component';
import { TestsChoiceComponent } from './tests-choice/tests-choice.component';
import { TaskidComponent } from './taskid/taskid.component';


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
    CreateTeamComponent,
    EditPasswordComponent,
    TopteamComponent,
    TestComponent,
    ExerciseComponent,
    ExpidComponent,
    UserComponent,
    TaskComponent,
    SubjChoiceComponent,
    TestsChoiceComponent,
    TaskidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTabsModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    Title,
    AuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '468426775064-443461r5nfk5pl5r6hjqaa7pt1ddinkq.apps.googleusercontent.com'
            )
          }
        ],
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

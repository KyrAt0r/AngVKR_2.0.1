import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LogoutComponent} from './logout/logout.component';
import {AboutComponent} from './about/about.component';
import {CreateEditComponent} from './create-edit/create-edit.component';
import {CreateSubjectComponent} from './create-subject/create-subject.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {AuthGuard} from './auth.guard';
import {EditPasswordComponent} from './edit-password/edit-password.component';
import {TopteamComponent} from './topteam/topteam.component';
import {ExerciseComponent} from './exercise/exercise.component';
import {UserComponent} from './user/user.component';
import {ExpidComponent} from './expid/expid.component';
import {TestComponent} from './test/test.component'
import {TaskComponent} from './task/task.component';
import {SubjChoiceComponent} from './subj-choice/subj-choice.component';
import {TestsChoiceComponent} from './tests-choice/tests-choice.component';
import {TaskidComponent} from './taskid/taskid.component';

const routes: Routes = [
  {path: 'reg', component: RegComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'test', component: TestComponent},
  {path: 'home', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'exercise', component: ExerciseComponent, canActivate: [AuthGuard]},
  {path: 'exercise/:id', component: ExpidComponent, canActivate: [AuthGuard]},
  {path: 'subject', component: SubjChoiceComponent, canActivate: [AuthGuard]},
  {path: 'subject/:nameSub', component: TestsChoiceComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: TaskComponent, canActivate: [AuthGuard]},
  {path: 'tasks/:id', component: TaskidComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'create-test', component: CreateEditComponent, canActivate: [AuthGuard]},
  {path: 'create-subject', component: CreateSubjectComponent, canActivate: [AuthGuard]},
  {path: 'create-team', component: CreateTeamComponent, canActivate: [AuthGuard]},
  {path: 'editpass', component: EditPasswordComponent, canActivate: [AuthGuard]},
  {path: 'topteams', component: TopteamComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},

  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: AuthComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

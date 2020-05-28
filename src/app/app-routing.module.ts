import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LogoutComponent} from './logout/logout.component';
import {AboutComponent} from './about/about.component';
import {CreateEditComponent} from './create-edit/create-edit.component';
import {AuthGuard} from './auth.guard';
import {EditPasswordComponent} from './edit-password/edit-password.component';



const routes: Routes = [
  {path: 'reg', component: RegComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent },
  {path: 'create', component: CreateEditComponent, canActivate: [AuthGuard]},
  {path: 'editpass', component: EditPasswordComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', component: AuthComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

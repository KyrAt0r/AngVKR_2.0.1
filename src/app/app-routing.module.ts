import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LogoutComponent} from './logout/logout.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {path: 'reg', component: RegComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', component: MainPageComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

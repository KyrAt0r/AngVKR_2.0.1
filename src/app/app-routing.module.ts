import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CreateEditComponent} from './create-edit/create-edit.component';


const routes: Routes = [
  {path: 'reg', component: RegComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'create', component: CreateEditComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

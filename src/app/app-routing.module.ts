import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'profile' , component : ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

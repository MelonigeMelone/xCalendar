import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, 
  { path: 'welcome', component: WelcomePageComponent, title: 'xCalendar - Welcome' },
  { path: 'login', component: LoginPageComponent, title: 'xCalendar - Login' }, 
  { path: 'registration', component: RegisterPageComponent, title: 'xCalendar - Registration' },
  { path: 'home/:userMailAddress/:userPassword', component: LandingPageComponent, title: 'xCalendar - Home' },
  { path: 'profile/:userMailAddress/:userPassword', component: UserProfileComponent, title: 'xCalendar - Profile' }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FlappyBirdComponent } from './minigame-page/minigame-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { AppointmentInfoComponent } from './appointment-info/appointment-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent, title: 'xCalendar - Welcome' },
  { path: 'login', component: LoginPageComponent, title: 'xCalendar - Login' },
  { path: 'registration', component: RegisterPageComponent, title: 'xCalendar - Registration' },
  { path: 'home/:userName', component: LandingPageComponent, title: 'xCalendar - Home' },
  { path: 'profile/:userMailAddress', component: UserProfileComponent, title: 'xCalendar - Profile' },
  {
    path: 'flappy-bird/:userName',
    component: FlappyBirdComponent,
    title: 'xCalendar - Mini - Game',
  },
  { path: 'calendar/:userName', component: CalendarComponent, title: 'xCalendar - Kalendar' },
  {
    path: 'calendar-day/:userName/:year/:month/:day',
    component: CalendarDayComponent,
    title: 'xCalendar - Kalendar',
  },
  {
    path: 'appointment-info/:userName',
    component: AppointmentInfoComponent,
    title: 'xCalendar - Kalendar',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

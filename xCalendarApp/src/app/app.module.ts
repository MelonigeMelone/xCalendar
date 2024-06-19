import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {GraphQLModule} from './graphql.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {CountriesComponent} from './countries/countries.component';
import {FlappyBirdComponent} from './minigame-page/minigame-page.component'
import {CalendarComponent } from './calendar/calendar.component';
import {CalendarDayComponent} from "./calendar-day/calendar-day.component";
import {AppointmentInfoComponent} from "./appointment-info/appointment-info.component";


        AppComponent,
        CalendarComponent,
@NgModule({ declarations: [
        AppComponent,
        CountriesComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        AppointmentInfoComponent,
        BrowserAnimationsModule,
        CalendarComponent,
        CalendarDayComponent,
        LoginPageComponent,
        RegisterPageComponent,
        LandingPageComponent,
        FlappyBirdComponent,
        GraphQLModule
ApolloModule,], providers: [
    {
      provide: APOLLO_OPTIONS,
  useFactory: (httpLink: HttpLink) => {
    return {
      link: createHttpLink({ uri:"http://localhost:4000/graphql"}),
      cache: new InMemoryCache(),
    };
  },
  deps: [HttpLink]
    },
    provideHttpClient()
  ],
export class AppModule {
}

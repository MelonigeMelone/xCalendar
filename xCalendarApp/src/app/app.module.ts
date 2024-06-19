import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";

import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import {
  provideHttpClient,
  withInterceptorsFromDi, HttpClientModule,
} from "@angular/common/http";
import { FlappyBirdComponent } from "./minigame-page/minigame-page.component";
import { CalendarComponent } from "./calendar/calendar.component";

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, createHttpLink } from '@apollo/client/core';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    LoginPageComponent,
    RegisterPageComponent,
    LandingPageComponent,
    FlappyBirdComponent,
    ApolloModule,
    GraphQLModule,
  ],
  providers: [
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
})
export class AppModule {}

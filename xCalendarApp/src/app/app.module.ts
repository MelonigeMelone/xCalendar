import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GraphQLModule } from './graphql.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [AppComponent, CountriesComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageComponent,
    GraphQLModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}

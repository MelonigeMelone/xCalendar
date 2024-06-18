import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink, InMemoryCache } from "@apollo/client/core";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { GraphQLModule } from "./graphql.module";
import { CountriesComponent } from "./countries/countries.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, CountriesComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    LoginPageComponent,
    RegisterPageComponent,
    LandingPageComponent,
    GraphQLModule,
    ApolloModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
      }),
      deps: [HttpLink],
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

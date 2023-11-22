import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

import { LoginPageComponent } from './login-page/login-page.component';
<<<<<<< Updated upstream
=======
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
>>>>>>> Stashed changes

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
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
<<<<<<< Updated upstream
        LoginPageComponent
=======
        LoginPageComponent,
        RegisterPageComponent,
        LandingPageComponent
>>>>>>> Stashed changes
    ]
})
export class AppModule { }

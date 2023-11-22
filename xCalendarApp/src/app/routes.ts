import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routeConfig: Routes = [
    {
        path: '', 
        component: LoginPageComponent,
        title: 'xCalendar - Login'
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        title: 'xCalendar - Register'
    },
    {
        path: 'home/:userMailAddress/:userPassword',
        component: LandingPageComponent,
        title: 'xCalendar - Home'
    }
];

export default routeConfig;
import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";

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
    }
];

export default routeConfig;
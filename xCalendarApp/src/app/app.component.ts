import { Component } from '@angular/core';
<<<<<<< Updated upstream
=======
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./app.component.scss']
=======
  styleUrls: ['./app.component.scss'],
  imports: [LoginPageComponent, RouterModule, RegisterPageComponent]
>>>>>>> Stashed changes
})
export class AppComponent {
  title = 'xCalendarApp';
}

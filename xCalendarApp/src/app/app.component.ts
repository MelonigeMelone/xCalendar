import { Component } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LoginPageComponent, RouterModule]
})
export class AppComponent {
  title = 'xCalendarApp';
}

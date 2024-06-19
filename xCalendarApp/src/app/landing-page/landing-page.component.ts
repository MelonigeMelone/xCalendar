import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WeatherResponse, WeatherService } from '../weather-service/weather.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  private router: Router = inject(Router);

  userMailAddress = 'null';

  date = 'null';

  weatherData: WeatherResponse | undefined;

  upcomingDays: { date: number; weekday: string }[] = [];

  constructor(protected weatherService: WeatherService) {
    this.userMailAddress = String(this.route.snapshot.params['userName']);
    this.date = new Date().toLocaleDateString();
  }

  navigateToMinigame() {
    this.router.navigate(['flappy-bird', this.userMailAddress]);
  }

  navigateToCalendar() {
    this.router.navigate(['calendar', this.userMailAddress]);
  }

  ngOnInit(): void {
    this.generateUpcomingDays();
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
    });
  }

  generateUpcomingDays(): void {
    const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const today = new Date();

    for (let i = 0; i <= 4; i++) {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + i);
      const date = futureDate.getDate();
      const weekday = daysOfWeek[futureDate.getDay()];

      this.upcomingDays.push({ date, weekday });
    }
  }
}

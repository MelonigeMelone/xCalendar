
import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {WeatherResponse, WeatherService} from "../weather-service/weather.service";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  protected userMailAddress = '';
  weatherData: WeatherResponse | undefined;
  upcomingDays: { date: number; weekday: string }[] = [];

  protected date = '';

  constructor(protected router: Router, protected weatherService: WeatherService) {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
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

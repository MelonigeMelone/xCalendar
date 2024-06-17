import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from '../header/header.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {FooterComponent} from '../footer/footer.component';
import {WeatherResponse, WeatherService} from "../weather-service/weather.service";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, HeaderComponent, SidenavComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  userMailAddress = "null";
  userPassword = "null";
  date = "null";
  weatherData: WeatherResponse | undefined;

  constructor(protected weatherService: WeatherService) {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']);
    this.date = new Date().toLocaleDateString();
  }
navigateToMinigame() {
    this.router.navigate(['flappy-bird'])
}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
    });
  }
}

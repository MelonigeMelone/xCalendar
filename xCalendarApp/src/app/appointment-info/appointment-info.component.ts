import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {WeatherResponse, WeatherService} from "../weather-service/weather.service";

@Component({
  selector: 'app-appointment-info',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './appointment-info.component.html',
  styleUrl: './appointment-info.component.scss'
})
export class AppointmentInfoComponent implements OnInit{
  weatherData: WeatherResponse | undefined;

  constructor(protected weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
    });
  }

}

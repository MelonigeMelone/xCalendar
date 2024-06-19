import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    apparent_temperature: string;
    rain: string;
    weather_code: string;
    cloud_cover: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    rain: number;
    weather_code: number;
    cloud_cover: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=49.0094&longitude=8.4044&current=temperature_2m,apparent_temperature,rain,weather_code,cloud_cover&timezone=Europe%2FBerlin&forecast_days=1';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(this.apiUrl);
  }

  private weatherCodeDescriptions: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mostly clear',
    2: 'Mostly clear',
    3: 'Mostly clear',
    45: 'Fog',
    48: 'Fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Light rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Light snowfall',
    73: 'Moderate snowfall',
    75: 'Heavy snowfall',
    77: 'Snow grains',
    80: 'Light rain showers',
    81: 'Moderate rain showers',
    82: 'Heavy rain showers',
    85: 'Light snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with light hail',
    99: 'Thunderstorm with heavy hail'
  };

  getWeatherDescription(code: number | undefined): string {
    if(code === undefined) {
      return 'Unbekanntes Wetter';
    }
    return this.weatherCodeDescriptions[code] || 'Unbekanntes Wetter';
  }
}

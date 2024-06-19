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
    0: 'Klarer Himmel',
    1: 'Überwiegend klar',
    2: 'Überwiegend klar',
    3: 'Überwiegend klar',
    45: 'Nebel',
    48: 'Nebel',
    51: 'Leichter Nieselregen',
    53: 'Mäßiger Nieselregen',
    55: 'Dichter Nieselregen',
    56: 'Leichter gefrierender Nieselregen',
    57: 'Dichter gefrierender Nieselregen',
    61: 'Leichter Regen',
    63: 'Mäßiger Regen',
    65: 'Starker Regen',
    66: 'Leichter gefrierender Regen',
    67: 'Starker gefrierender Regen',
    71: 'Leichter Schneefall',
    73: 'Mäßiger Schneefall',
    75: 'Starker Schneefall',
    77: 'Schneekörner',
    80: 'Leichte Regenschauer',
    81: 'Mäßige Regenschauer',
    82: 'Starke Regenschauer',
    85: 'Leichte Schneeschauer',
    86: 'Starke Schneeschauer',
    95: 'Gewitter',
    96: 'Gewitter mit leichtem Hagel',
    99: 'Gewitter mit starkem Hagel'
  };

  getWeatherDescription(code: number | undefined): string {
    if(code === undefined) {
      return 'Unbekanntes Wetter';
    }
    return this.weatherCodeDescriptions[code] || 'Unbekanntes Wetter';
  }
}

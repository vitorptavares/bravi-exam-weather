import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {
   }
   getWeather(location:string){
    return this.http.get(`${environment.API}/?q=${location}&appid=${environment.APPID}`);
  }
   
}

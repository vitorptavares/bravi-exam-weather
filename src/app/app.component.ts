import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bravi-exam-wheather';


  currentWeather: any = <any>{};
  msg: string;
  form:Form;
  resultFound:boolean = false;

  constructor(private service:WeatherService){

  }
  submit(form){
    this.form = form;
    this.msg = '';
    this.currentWeather = {};
    this.service.getWeather(form.value.city_name)
      .subscribe(res => {
        this.currentWeather = res;
        this.resultFound = true;
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          this.resultFound = false;
          return;
        }

      }, () => {
})


  }
}

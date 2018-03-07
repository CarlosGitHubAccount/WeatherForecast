import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})

export class BurbankComponent implements OnInit {
  weather = {};
  constructor(private _apiservice: ApiService ) { }

  ngOnInit(){
    this._apiservice.weather.subscribe((serviceData)=>{
      this.weather = serviceData;
    })
    this._apiservice.getWeather('burbank');

  }
}

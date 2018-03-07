import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})

export class DallasComponent implements OnInit {
  weather = {};
  constructor(private _apiservice: ApiService ) { }

  ngOnInit(){
    this._apiservice.weather.subscribe((serviceData)=>{
      this.weather = serviceData;
    })
    this._apiservice.getWeather('dallas');

  }
}

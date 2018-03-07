import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})

export class SeattleComponent implements OnInit {
  weather = {};
  constructor(private _apiservice: ApiService ) { }

  ngOnInit(){
    this._apiservice.weather.subscribe((serviceData)=>{
      this.weather = serviceData;
    })
    this._apiservice.getWeather('seattle');

  }
}

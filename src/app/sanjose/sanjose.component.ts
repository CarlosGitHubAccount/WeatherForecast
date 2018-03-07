import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})

export class SanjoseComponent implements OnInit {
  weather = {};
  constructor(private _apiservice: ApiService ) { }

  ngOnInit(){
    this._apiservice.weather.subscribe((serviceData)=>{
      this.weather = serviceData;
    })
    this._apiservice.getWeather('san jose');

  }
}

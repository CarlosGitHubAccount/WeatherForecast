import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})

export class DcComponent implements OnInit {
  weather = {};
  constructor(private _apiservice: ApiService ) { }

  ngOnInit(){
    this._apiservice.weather.subscribe((serviceData)=>{
      this.weather = serviceData;
    })
    this._apiservice.getWeather('district of columbia');

  }
}

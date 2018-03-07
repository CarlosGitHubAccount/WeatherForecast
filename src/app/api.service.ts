import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
// import 'rxjs/Rx'

@Injectable()
export class ApiService {
  weather: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { 
    this.getWeather();
  }
  updateWeather(weather){
    this.weather.next(weather)
  }

  // constructor(private _http: Http) { }



  getWeather(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=573efa51d47e2d8d671ee61ba6082678').subscribe( (weather: any[]) => { this.updateWeather(weather); });
  }
}
// import { Component, OnInit } from '@angular/core';

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/Rx'
// @Injectable()
// export class ApiService {

//   constructor(private _http: Http) { }
//   getWeather(city){
//     return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=573efa51d47e2d8d671ee61ba6082678").map(data=>data.json()).toPromise()
//   }
// }




import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CityService {

  constructor(private _http: Http) { }

  getDallasWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }

  getSeattleWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }

  getSanjoseWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Jose&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }

  getBurbankWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }

  getWashingtonWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }

  getChicagoWeather(){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=07073ba391de7aa0e40b10c416c3aee8');
  }
}

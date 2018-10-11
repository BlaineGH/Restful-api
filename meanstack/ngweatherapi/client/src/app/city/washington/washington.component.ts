import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
	washington: {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;

  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getWashingtonWeather();
  }

  getWashingtonWeather(){
  	let obseravble = this._cityservice.getWashingtonWeather();
  	obseravble.subscribe((data)=>{
  		const city = data.json();
  		this.name = city["name"];
  		this.humidity = city["main"]["humidity"];
  		this.avgtemp = city["temp"];
  		this.hightemp = city["main"]["temp_max"];
  		this.lowtemp = city["main"]["temp_min"];
  		this.status = city["weather"][0]["description"];
  	});
  }
}

import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	dallas: {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;


  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getDallasWeather();
  }

  getDallasWeather(){
  	let obseravble = this._cityservice.getDallasWeather();
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

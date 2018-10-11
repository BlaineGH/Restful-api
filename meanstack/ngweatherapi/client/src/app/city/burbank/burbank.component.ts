import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	burbank = {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;

  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getBurbankWeather();
  }
  getBurbankWeather(){
  	let obseravble = this._cityservice.getBurbankWeather();
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

import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	seattle: {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;

  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getSeattleWeather();
  }

  getSeattleWeather(){
  	let obseravble = this._cityservice.getSeattleWeather();
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

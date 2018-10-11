import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	chicago: {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;

  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getChicagoWeather();
  }

  getChicagoWeather(){
  let obseravble = this._cityservice.getChicagoWeather();
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

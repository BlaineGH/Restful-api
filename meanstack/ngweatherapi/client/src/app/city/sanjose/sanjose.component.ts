import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	sanjose: {};
	name: String;
	humidity: Number;
	avgtemp;
	hightemp;
	lowtemp;
	status;

  constructor(private _cityservice: CityService) { }

  ngOnInit() {
  	this.getSanjoseWeather();
  }

  getSanjoseWeather(){
  	let obseravble = this._cityservice.getSanjoseWeather();
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

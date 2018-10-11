import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

	constructor(private _http: Http) {
		this.getPokemon();
	}

	getPokemon(){
		let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
		pokemon.subscribe((data)=>{
			let pokemondata = data.json();
			let pokemonabilities = pokemondata.abilities;
			let pokemonname = pokemondata.name;
			console.log(pokemonname);
			for(let i = 0; i < pokemonabilities.length; i++){
				console.log(pokemonname+" ability: "+pokemonabilities[i].ability.name);
				let list_of_pokemon = `${pokemonabilities[i].ability.url}`;
				console.log(list_of_pokemon.length+" pokemon have the ability "+pokemonabilities[i].ability.name);
			}
		});
	}
}

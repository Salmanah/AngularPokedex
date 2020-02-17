import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service'; 
import {PokemonDetails} from '../../models/pokemon-details'; 
import {ActivatedRoute, Params} from '@angular/router'
import {PokemonEvolution} from '../../models/pokemon-evolution';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  apiURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  speciesURL: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  evolutionURL: string ='https://pokeapi.co/api/v2/evolution-chain/'
  regex: RegExp = /(?<=\/)\d+(?=\/)/gi; 

  pokemon: PokemonDetails;
  pokemonEvolution: PokemonEvolution = new PokemonEvolution();  
  pokemonSubscription: Subscription; 

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonSubscription = this.route.params.subscribe((params:Params) =>{
      this.pokemonService.getPokemonById(this.apiURL+this.route.snapshot.paramMap.get('id')).subscribe((res) =>{
        this.pokemon = res.body; 
      });
  
      this.pokemonService.getPokemonSpecies(this.speciesURL+this.route.snapshot.paramMap.get('id')).subscribe((res) =>{
        this.pokemonEvolution.name = res.body.name;
        this.pokemonEvolution.id = res.body.id; 
        this.pokemonEvolution.evolution_chain_id = (res.body as any).evolution_chain.url.match(this.regex)[0];
        this.pokemonEvolution.evolutions = []; 
        
        this.pokemonService.getPokemonEvolutions(this.evolutionURL+this.pokemonEvolution.evolution_chain_id).subscribe((res) =>{
          this.createEvolutionChain(res.body);
          
        })
      }); 
    })
  }

  createEvolutionChain(data){
    let evolutionData = data.chain
    let eevee = false;
  
    do{     
      this.pokemonEvolution.evolutions.push({name: evolutionData.species.name,id: evolutionData.species.url.match(this.regex)[0]})
      if(evolutionData.evolves_to.length > 1){
          evolutionData.evolves_to.forEach(element => {
            this.pokemonEvolution.evolutions.push({name: element.species.name,id: element.species.url.match(this.regex)[0]})
        });
        eevee = true;
      } 
        evolutionData = evolutionData['evolves_to'][0]; 
    }while(!!evolutionData && evolutionData.hasOwnProperty('evolves_to') && !eevee)
  }
}

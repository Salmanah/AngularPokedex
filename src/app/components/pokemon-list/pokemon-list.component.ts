import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service'; 
import {PokemonDetails} from '../../models/pokemon-details'; 
import { PokemonEvolution } from 'src/app/models/pokemon-evolution';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonDetails : PokemonDetails[] = []
  pokemonEvolutions: PokemonEvolution[] = []
  
  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getAllPokemon().subscribe((res)=>{
      res.body.results.forEach(element => {
        this.pokemonService.getPokemonById(element.url).subscribe((res) =>{
          this.pokemonDetails.push(res.body);
        }); 
      });
    });
    
    this.pokemonService.getPokemonSpecies().subscribe((res) =>{
      this.pokemonEvolutions.push(res.body);
    })
  }

  sortArray(array){
    array.sort((a, b) => a.id - b.id)
      return array;
  }


  loadMore(){
    this.pokemonService.getAllPokemon(this.pokemonService.nextPage).subscribe((res)=>{
      res.body.results.forEach(element => {
        this.pokemonService.getPokemonById(element.url).subscribe((res) =>{
          this.pokemonDetails.push(res.body);
        }); 
      });
    });
  }

}

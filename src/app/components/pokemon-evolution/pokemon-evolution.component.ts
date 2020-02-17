import { Component, OnInit, Input } from '@angular/core';
import { PokemonEvolution } from 'src/app/models/pokemon-evolution';
@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss']
})
export class PokemonEvolutionComponent implements OnInit {
 
  @Input() pokemonEvolution:any;
  imageFrontUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  imageBackUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'
  constructor() { }

  ngOnInit() {
  }

}

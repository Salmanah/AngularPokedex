import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonDetails } from 'src/app/models/pokemon-details';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
  @Input() pokemon:PokemonDetails
  constructor() { }

  ngOnInit() {
  }

}

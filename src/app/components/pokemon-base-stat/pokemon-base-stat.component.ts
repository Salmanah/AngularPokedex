import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon-details';

@Component({
  selector: 'app-pokemon-base-stat',
  templateUrl: './pokemon-base-stat.component.html',
  styleUrls: ['./pokemon-base-stat.component.scss']
})
export class PokemonBaseStatComponent implements OnInit {
  @Input() pokemon:PokemonDetails
  constructor() { }

  ngOnInit() {
  }

}

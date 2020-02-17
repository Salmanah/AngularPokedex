import { Component, OnInit, Input } from '@angular/core';
import {PokemonDetails} from '../../models/pokemon-details';
@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {
  @Input() pokemon:PokemonDetails
  constructor() { }

  ngOnInit() {
  }

}

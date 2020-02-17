import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
@Input() poke:any; 
  
  constructor() { }

  ngOnInit() {
  }

}

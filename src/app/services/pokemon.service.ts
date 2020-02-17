import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Results} from '../models/results'; 
import { tap } from 'rxjs/operators'; 
import { PokemonDetails } from '../models/pokemon-details';
import {PokemonEvolution} from '../models/pokemon-evolution'

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  apiURL: string = 'https://pokeapi.co/api/v2/pokemon/' 
  public firstPage: string = ''; 
  public prevPage: string = ''; 
  public nextPage: string = '';
  public lastPage: string = ''; 
  

  constructor(private httpClient: HttpClient) { }

  public getAllPokemon(url?: string){
    if(url){
      return this.httpClient.get<Results>(url, {observe: 'response'}).pipe(tap(res => {
        this.retrieve_pagination_links(res.body);
      }));
    }
    return this.httpClient.get<Results>(`${this.apiURL}`,{ observe: 'response' }).pipe(tap(res =>{
      this.retrieve_pagination_links(res.body); 
      }));
  }

  public retrieve_pagination_links(body){
    if(body.previous == null){
      this.prevPage = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20" 
    }
    this.prevPage =  body.previous;
    this.nextPage =  body.next; 
}

public getPokemonById(url:string){
  return this.httpClient.get<PokemonDetails>(url, {observe: 'response'});
}

  public getPokemonSpecies(url?: string){
    return this.httpClient.get<PokemonEvolution>(url, {observe: 'response'}).pipe(tap(res => {
    }));;
  }

  public getPokemonEvolutions(url?: string){
    return this.httpClient.get<PokemonEvolution>(url, {observe: 'response'}).pipe(tap(res => {
    }));;
  }
}

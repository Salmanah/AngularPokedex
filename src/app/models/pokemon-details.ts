import { PokemonEvolution } from './pokemon-evolution';

export class PokemonDetails {
    id: number; 
    name: string; 
    base_experience: number; 
    height: number; 
    is_default: boolean; 
    order: number; 
    weight: number; 
    abilities: [];
    forms: [];
    game_indices: [];
    held_items: [];
    location_area_encounters: [];
    moves: [];
    species: {}; 
    sprites: {}; 
    stats: [];
    types: []; 
}

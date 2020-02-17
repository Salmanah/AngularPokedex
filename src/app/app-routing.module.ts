import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


const routes: Routes = [
  {path:'pokedex', component: PokemonListComponent},
  {path:'pokedex/:id', component: PokemonDetailsComponent},
  {path: '',
    redirectTo: '/pokedex',
    pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

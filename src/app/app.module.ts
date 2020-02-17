import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonEvolutionComponent } from './components/pokemon-evolution/pokemon-evolution.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { PokemonBaseStatComponent } from './components/pokemon-base-stat/pokemon-base-stat.component';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonListItemComponent,
    CapitalizePipe,
    PokemonEvolutionComponent,
    PokemonStatsComponent,
    PokemonProfileComponent,
    PokemonBaseStatComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

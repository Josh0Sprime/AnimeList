import { PrimeModule } from './../prime/prime.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { ListadoAnimeComponent } from './listado-anime/listado-anime.component';
import { VerAnimeComponent } from './ver-anime/ver-anime.component';
import { VerPersonajesComponent } from './ver-personajes/ver-personajes.component';
import { SafePipe } from '../pipes/url.pipe';



@NgModule({
  declarations: [
    NoticiasComponent,
    ListadoAnimeComponent,
    VerAnimeComponent,
    VerPersonajesComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    PrimeModule,
  ]
})
export class AnimeModule { }

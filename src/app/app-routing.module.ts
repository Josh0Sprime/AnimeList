import { VerAnimeComponent } from './anime/ver-anime/ver-anime.component';
import { VerPersonajesComponent } from './anime/ver-personajes/ver-personajes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAnimeComponent } from './anime/listado-anime/listado-anime.component';
import { PersonajeComponent } from './anime/ver-personajes/personaje/personaje.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoAnimeComponent,
  },
  {
    path: 'Personajes',
    component: VerPersonajesComponent
  },
  {
    path: "Animes",
    component: VerAnimeComponent
  },
  {
    path: 'Personaje/:id',
    component: PersonajeComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

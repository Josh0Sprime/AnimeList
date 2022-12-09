import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent {

  firts: number = 0;
  totalRecords: number = 99;
  personajes: any;
  constructor(private animeS: AnimeService){
    animeS.obtenerPersonajes().subscribe(resp => {
      this.personajes = resp;
      console.log(this.personajes.data);
    })
  }

  onPageChange(event: any){
      this.firts = event.firts;
  }

}

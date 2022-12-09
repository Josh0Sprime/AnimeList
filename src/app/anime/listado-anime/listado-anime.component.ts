import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-listado-anime',
  templateUrl: './listado-anime.component.html',
  styleUrls: ['./listado-anime.component.css']
})
export class ListadoAnimeComponent implements OnInit {

  noticias!: any;
  opcionesResponsive!: any [];

  constructor(private animeS: AnimeService){
    animeS.obtenerNoticas().subscribe((resp: any) => {
      this.noticias = resp.data;
      console.log(this.noticias);
    })
    this.opcionesResponsive = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
  }

}
